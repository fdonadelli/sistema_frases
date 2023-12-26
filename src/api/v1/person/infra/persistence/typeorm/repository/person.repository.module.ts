import { Module } from '@nestjs/common';
import { PersonRepository } from './person.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPerson } from '../entity/type-orm-person';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOrmPerson])],
  providers: [
    {
      provide: 'IPersonRepository',
      useClass: PersonRepository,
    },
  ],
  exports: ['IPersonRepository'],
})
export class PersonRepositoryModule {}
