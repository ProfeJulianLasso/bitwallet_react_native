import {UserEntity} from '../entities';

export interface IUserService {
  registerUser({
    id,
    externalId,
  }: {
    id: string;
    externalId: string;
  }): Promise<UserEntity>;
}
