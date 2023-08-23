import {v4 as uuid} from 'uuid';

export class User {
  private _id: string;
  private _externalId: string;

  constructor(data?: {id?: string; externalId?: string}) {
    this._id = data?.id ?? '0';
    this._externalId = data?.externalId ?? '0';
  }

  get id(): string {
    return this._id;
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
