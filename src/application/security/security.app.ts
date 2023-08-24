import {IUserService, RegisterUserCommand, User} from '@domain';
import {GenerateUuidValidUseCase, RegisterUserUseCase} from './use-cases';

export class SecurityApp {
  generateUuidValid(): string {
    const useCase = new GenerateUuidValidUseCase();
    return useCase.execute();
  }

  registerUser(
    registerUserCommand: RegisterUserCommand,
    userService: IUserService,
  ): Promise<User> {
    const useCase = new RegisterUserUseCase(userService);
    return useCase.execute(registerUserCommand);
  }
}
