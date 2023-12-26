import { Module } from '@nestjs/common';
import { PersonRepository } from './person.repository';

@Module({
  providers: [
    {
      provide: 'IPersonRepository',
      useClass: PersonRepository,
    },
  ],
  exports: ['IPersonRepository'],
})
export class PersonRepositoryModule {}
