import {v4 as uuidv4} from 'uuid';

export class GenerateUuidValidUseCase {
  execute(): string {
    return uuidv4();
  }
}
