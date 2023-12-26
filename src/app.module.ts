import { Module } from '@nestjs/common';
import { PersonModule } from './api/v1/person/person.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmDirectory } from './api/v1/person/infra/persistence/typeorm/TypeOrmDirectory';

@Module({
  imports: [
    PersonModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgresql_local',
      port: 5454,
      username: 'user_sistema_frases',
      password: 'pass_sistema_frases',
      database: 'sf_db',
      entities: [`${TypeOrmDirectory}/entity/**/*{.ts,.js}`],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
