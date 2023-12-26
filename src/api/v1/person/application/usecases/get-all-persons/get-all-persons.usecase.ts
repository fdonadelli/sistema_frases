import { IPersonRepository } from '../../../domain/interfaces/person-repository.interface';

export class GetAllPersonsUseCase {
  constructor(private readonly personRepository: IPersonRepository) {}

  async execute() {
    return await this.personRepository.findAll();
  }
}
