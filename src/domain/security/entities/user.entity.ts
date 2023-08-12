import {v4 as uuid} from 'uuid';

export class UserEntity {
  private _id: string;
  private _externalId: string;

  constructor(id?: string, externalId?: string) {
    this._id = id ?? '0';
    this._externalId = externalId ?? '0';
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get externalId(): string {
    return this._externalId;
  }

  set externalId(value: string) {
    this._externalId = value;
  }

  create(): this {
    this._id = uuid();
    return this;
  }
}
