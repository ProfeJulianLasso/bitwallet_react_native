import {UserEntity} from '../entities';

export interface IUserService {
  registerUser(id: string, externalId: string): Promise<UserEntity>;
}
