import { Module } from '@nestjs/common';
import { PersonController } from './infra/http/person.controller';
import { CreatePersonUseCase } from './application/usecases/create-person/create-person.usecase';
import { PersonRepositoryModule } from './infra/db/person.repository.module';
import { CreatePersonUseCaseProvider } from './infra/DI/usecases/create-person/create-person.usecase.provider';

@Module({
  imports: [PersonRepositoryModule],
  controllers: [PersonController],
  providers: [CreatePersonUseCaseProvider],
  exports: [CreatePersonUseCase],
})
export class PersonModule {}
