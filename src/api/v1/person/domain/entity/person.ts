import { v4 } from 'uuid';
import { PersonEntityPayload } from './type/person-entity-payload.type';
import { Nullable } from '../common/types/common-types';
import { Exception } from '../common/exception/Exception';
import { Code } from '../common/code/Code';
export class Person {
  private id?: string;
  private name: string;
  private cpf: string;
  private phone: string;
  private readonly createdAt: Date;
  private editedAt: Nullable<Date>;
  private removedAt: Nullable<Date>;

  constructor(payload: PersonEntityPayload) {
    this.id = payload.id || v4();
    this.name = payload.name;
    this.cpf = payload.cpf;
    this.phone = payload.phone;

    this.createdAt = payload.createdAt || new Date();
    this.editedAt = payload.editedAt || null;
    this.removedAt = payload.removedAt || null;
  }

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getPhone(): string {
    return this.phone;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getEditedAt(): Nullable<Date> {
    return this.editedAt;
  }

  public getRemovedAt(): Nullable<Date> {
    return this.removedAt;
  }

  private async validateCPF(cpf: string): Promise<void> {
    if (cpf.length !== 11) {
      throw Exception.new({
        code: Code.ENTITY_VALIDATION_ERROR,
        data: 'invalid cpf length',
      });
    }
  }

  public static async new(payload: PersonEntityPayload): Promise<Person> {
    const person: Person = new Person(payload);
    await person.validateCPF(person.getCpf());
    return person;
  }

  public async remove(): Promise<void> {
    this.removedAt = new Date();
  }
}
