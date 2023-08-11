import {ValueObjectExceptionType} from '../../exceptions/domain.exception';
import {RuleBuilder} from '../validators';

export abstract class ValidatorBase<Command> {
  private _errors: ValueObjectExceptionType[];
  private _command: Command;

  constructor(command: Command) {
    this._errors = new Array<ValueObjectExceptionType>();
    this._command = command;
  }

  getErrors(): ValueObjectExceptionType[] {
    return this._errors;
  }

  set error(error: ValueObjectExceptionType) {
    this._errors.push(error);
  }

  get command(): Command {
    return this._command;
  }

  isValid(): boolean {
    return this._errors.length === 0;
  }

  protected ruleFor<Type>(property: keyof Command): RuleBuilder<Command, Type> {
    return new RuleBuilder<Command, Type>(property, this);
  }
}
