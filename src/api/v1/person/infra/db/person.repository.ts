import { Person } from '../../domain/entity/person';
import { IPersonRepository } from '../../domain/interfaces/person-repository.interface';

export class PersonRepository implements IPersonRepository {
  async create(payload: Person): Promise<void> {
    console.log(payload);
  }
}
