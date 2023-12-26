import { Module } from '@nestjs/common';
import { PersonModule } from './api/v1/person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmDirectory } from './api/v1/person/infra/persistence/typeorm/TypeOrmDirectory';

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      //  host: 'localhost', DESCOMENTAR CASO QUEIRA CONECTAR FORA DO CONTEINER
      // port: 15432,
      username: 'postgres',
      password: 'PgAdmin#2023',
      database: 'sistema-frases-dev',
      entities: [`${TypeOrmDirectory}/entity/**/*{.ts,.js}`],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
