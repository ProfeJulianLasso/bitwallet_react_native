import {
  IUserService,
  RegisterUserCommand,
  RegisterUserValidator,
  User,
} from '@domain';

export class RegisterUserUseCase {
  constructor(private readonly userService: IUserService) {}

  execute(registerUserCommand: RegisterUserCommand): Promise<User> {
    const validator = new RegisterUserValidator(registerUserCommand);
    validator.validate();

    const user = new User();
    user.externalId = registerUserCommand.externalId;
    const newUser = user.create();

    return this.userService.registerUser({
      id: newUser.id,
      externalId: newUser.externalId,
    });
  }
}
