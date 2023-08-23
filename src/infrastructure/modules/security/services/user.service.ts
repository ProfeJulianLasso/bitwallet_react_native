import {IUserService, UserEntity} from '@domain';
import {HttpClient} from '../../../adapters';
import {NewUserDto} from '../../../dto';

export class UserService implements IUserService {
  constructor(private readonly httpClient: HttpClient) {}

  async registerUser({
    id,
    externalId,
  }: {
    id: string;
    externalId: string;
  }): Promise<UserEntity> {
    try {
      const response = await this.httpClient.post<NewUserDto>({
        url: 'http://localhost:3000/api/v1/users',
        data: {id, externalId},
      });
      return new UserEntity({
        id: response.data.id,
        externalId: response.data.externalId,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
