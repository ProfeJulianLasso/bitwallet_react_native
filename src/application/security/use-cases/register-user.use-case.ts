import {
  IUserService,
  RegisterUserCommand,
  RegisterUserValidator,
  SecurityAggregate,
  UserEntity,
} from '@domain';

export class RegisterUserUseCase {
  constructor(private readonly userService: IUserService) {}

  execute(registerUserCommand: RegisterUserCommand): Promise<UserEntity> {
    const validator = new RegisterUserValidator(registerUserCommand);
    validator.validate();

    const user = new UserEntity();
    user.externalId = registerUserCommand.externalId;

    const securityAggregate = new SecurityAggregate();
    const newUser = securityAggregate.createUser(user);

    return this.userService.registerUser({
      id: newUser.id,
      externalId: newUser.externalId,
    });
  }
}
