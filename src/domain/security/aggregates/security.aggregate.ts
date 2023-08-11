import {AggregateBase} from '../../common';
import {UserEntity} from '../entities';

export class SecurityAggregate extends AggregateBase {
  createUser(user: UserEntity): UserEntity {
    return user.create();
  }
}
