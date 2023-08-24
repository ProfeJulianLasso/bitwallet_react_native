import {DomainException, ValidatorBase} from '../../../common';
import {RegisterUserCommand} from '../register-user.command';

export class RegisterUserValidator extends ValidatorBase<RegisterUserCommand> {
  constructor(command: RegisterUserCommand) {
    super(command);
    this.ruleFor<string>('externalId')
      .notNull()
      .notUndefined()
      .notEmpty()
      .withMessage('External id is required')
      .isUUIDv5();
  }

  validate(): this {
    if (!this.isValid()) {
      throw new DomainException(
        'User registration validation failed',
        this.getErrors(),
      );
    }
    return this;
  }
}
