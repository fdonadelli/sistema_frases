import { Person } from '../../../domain/entity/person';
import { IPersonRepository } from '../../../domain/interfaces/person-repository.interface';

export class CreatePersonUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  async execute(payload) {
    const person = new Person(payload);
    await this.personRepository.create(person);
  }
}
