import { TypeOrmPerson } from '../type-orm-person';
import { Person } from 'src/api/v1/person/domain/entity/person';

export class TypeOrmPersonMapper {
  public static toOrmEntity(domainPerson: Person): TypeOrmPerson {
    const ormPerson: TypeOrmPerson = new TypeOrmPerson();

    ormPerson.id = domainPerson.getId();
    ormPerson.name = domainPerson.getName();
    ormPerson.cpf = domainPerson.getCpf();
    ormPerson.phone = domainPerson.getPhone();

    return ormPerson;
  }

  public static toOrmEntities(domainUsers: Person[]): TypeOrmPerson[] {
    return domainUsers.map((domainPerson) => this.toOrmEntity(domainPerson));
  }

  public static toDomainEntity(ormPerson: TypeOrmPerson): Person {
    const domainPerson: Person = new Person({
      name: ormPerson.name,
      cpf: ormPerson.cpf,
      phone: ormPerson.phone,
    });

    return domainPerson;
  }

  public static toDomainEntities(ormUsers: TypeOrmPerson[]): Person[] {
    return ormUsers.map((ormPerson) => this.toDomainEntity(ormPerson));
  }
}
