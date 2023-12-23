import { IPersonRepository } from '../../../domain/interfaces/person-repository.interface';

export class CreatePersonUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  async execute(payload) {
    await this.personRepository.create(payload);
  }
}
