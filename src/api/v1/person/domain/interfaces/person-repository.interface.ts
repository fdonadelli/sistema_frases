import { Person } from '../entity/person';

export interface IPersonRepository {
  create(payload: Person): Promise<void>;
  findAll(): Promise<Person[] | undefined>;
}
