import { Module } from '@nestjs/common';
import { PersonController } from './infra/http/person.controller';
import { CreatePersonUseCase } from './application/usecases/create-person/create-person.usecase';
import { PersonRepositoryModule } from './infra/persistence/typeorm/repository/person.repository.module';
import { CreatePersonUseCaseProvider } from './infra/DI/usecases/create-person/create-person.usecase.provider';
import { GetAllPersonsUseCase } from './application/usecases/get-all-persons/get-all-persons.usecase';
import { GetAllPersonsUseCaseProvider } from './infra/DI/usecases/get-all-persons/get-all-persons.usecase.provider';

@Module({
  imports: [PersonRepositoryModule],
  controllers: [PersonController],
  providers: [CreatePersonUseCaseProvider, GetAllPersonsUseCaseProvider],
  exports: [CreatePersonUseCase, GetAllPersonsUseCase],
})
export class PersonModule {}
