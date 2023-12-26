import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('person')
export class TypeOrmPerson {
  @PrimaryColumn()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public cpf: string;

  @Column()
  public phone: string;
}
