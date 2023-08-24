import {IUserService, User} from '@domain';
import {HttpClient, NewUserDto} from '@infrastructure';

export class UserService implements IUserService {
  constructor(private readonly httpClient: HttpClient) {}

  async registerUser({
    id,
    externalId,
  }: {
    id: string;
    externalId: string;
  }): Promise<User> {
    try {
      const response = await this.httpClient.post<NewUserDto>({
        url: 'http://localhost:3000/api/v1/users',
        data: {id, externalId},
      });
      return new User({
        id: response.data.id,
        externalId: response.data.externalId,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
