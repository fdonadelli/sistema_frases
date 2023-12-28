import { Person } from '../../../domain/entity/person';
import { CreatePersonType } from '../../../domain/entity/type/create-person.usecase.type';
import { IPersonRepository } from '../../../domain/interfaces/person-repository.interface';

export class CreatePersonUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  async execute(payload: CreatePersonType): Promise<void> {
    const person = await Person.new(payload);
    await this.personRepository.create(person);
  }
}
