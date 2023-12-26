import { v4 } from 'uuid';
import { PersonEntityPayload } from './type/person-entity-payload';
export class Person {
  private id?: string;
  private name: string;
  private cpf: string;
  private phone: string;

  constructor(payload: PersonEntityPayload) {
    this.id = payload.id || v4();
    this.name = payload.name;
    this.cpf = payload.cpf;
    this.phone = payload.phone;
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
}
