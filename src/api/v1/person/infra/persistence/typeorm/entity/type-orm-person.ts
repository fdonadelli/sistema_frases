import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('user')
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
