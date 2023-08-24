import {User} from '../models';

export interface IUserService {
  registerUser({
    id,
    externalId,
  }: {
    id: string;
    externalId: string;
  }): Promise<User>;
}
