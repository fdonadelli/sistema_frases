import { Provider } from '@nestjs/common';
import { PersonRepository } from '../../../persistence/typeorm/repository/person.repository';
import { GetAllPersonsUseCase } from 'src/api/v1/person/application/usecases/get-all-persons/get-all-persons.usecase';

export const GetAllPersonsUseCaseProvider: Provider = {
  provide: GetAllPersonsUseCase,
  useFactory: (personRepository: PersonRepository) => {
    return new GetAllPersonsUseCase(personRepository);
  },
  inject: ['IPersonRepository'],
};
