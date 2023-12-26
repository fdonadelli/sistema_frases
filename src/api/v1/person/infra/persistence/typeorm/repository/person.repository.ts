import { Repository } from 'typeorm';
import { Person } from '../../../../domain/entity/person';
import { IPersonRepository } from '../../../../domain/interfaces/person-repository.interface';
import { TypeOrmPerson } from '../entity/type-orm-person';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonRepository implements IPersonRepository {
  constructor(
    @InjectRepository(TypeOrmPerson)
    private readonly personRepository: Repository<Person>,
  ) {}
  async create(payload: Person): Promise<void> {
    await this.personRepository.save(payload);
  }
  async findAll(): Promise<Person[] | undefined> {
    const result = await this.personRepository.find();
    return result;
  }
}
