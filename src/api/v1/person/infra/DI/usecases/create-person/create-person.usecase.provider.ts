import { Provider } from '@nestjs/common';
import { CreatePersonUseCase } from '../../../../application/usecases/create-person/create-person.usecase';
import { PersonRepository } from '../../../db/person.repository';

export const CreatePersonUseCaseProvider: Provider = {
  provide: CreatePersonUseCase,
  useFactory: (personRepository: PersonRepository) => {
    return new CreatePersonUseCase(personRepository);
  },
  inject: ['IPersonRepository'],
};
