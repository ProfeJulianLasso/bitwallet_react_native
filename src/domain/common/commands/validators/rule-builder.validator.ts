import {validate as uuidValidate, version as uuidVersion} from 'uuid';
import {ValidatorBase} from '../base';

export class RuleBuilder<
  Command,
  Type = undefined | string | number | bigint | boolean | Date,
> {
  private readonly _value: Type;
  constructor(
    private readonly _property: keyof Command,
    private readonly _validator: ValidatorBase<Command>,
  ) {
    this._value = _validator.command[_property] as Type;
  }

  notNull(message?: string): this {
    if (this._value === null) {
      this._validator.error = {
        property: this._property as string,
        message: message ?? 'Property cannot be null',
      };
    }

    return this;
  }

  notEmpty(message?: string): this {
    if (this._value === '') {
      this._validator.error = {
        property: this._property as string,
        message: message ?? 'Property cannot be empty',
      };
    }

    return this;
  }

  notUndefined(message?: string): this {
    if (this._value === undefined) {
      this._validator.error = {
        property: this._property as string,
        message: message ?? 'Property cannot be undefined',
      };
    }

    return this;
  }

  notZero(message?: string): this {
    if (this._value === 0 || this._value === '0') {
      this._validator.error = {
        property: this._property as string,
        message: message ?? 'Property cannot be zero',
      };
    }

    return this;
  }

  isUUIDv5(message?: string): this {
    return this.isUUID(5, message);
  }

  isUUIDv4(message?: string): this {
    return this.isUUID(4, message);
  }

  private isUUID(version: 4 | 5, message?: string): this {
    const value = this._value as string;
    const objectError = {
      property: this._property as string,
      message: message ?? `Property must be a valid UUID v${version}`,
    };
    try {
      if (!uuidValidate(value) && uuidVersion(value) !== version) {
        this._validator.error = objectError;
      }
    } catch (error) {
      console.log('error', error);
      if (error instanceof TypeError) {
        this._validator.error = objectError;
      }
    }

    return this;
  }

  length({
    min,
    max,
    message,
  }: {
    min: number;
    max: number;
    message?: string;
  }): this {
    const value = this._value as string;
    if (value.length < min || value.length > max) {
      this._validator.error = {
        property: this._property as string,
        message: message ?? `Property length must be between ${min} and ${max}`,
      };
    }

    return this;
  }

  withMessage(message: string): this {
    if (!this._validator.isValid()) {
      this._validator.error = {
        property: this._property as string,
        message: message,
      };
    }

    return this;
  }
}
