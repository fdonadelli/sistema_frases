import { Person } from '../entity/person';

export interface IPersonRepository {
  create(payload: Person): void;
  findAll(): Promise<Person[] | undefined>;
}
