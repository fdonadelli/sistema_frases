import { Module } from '@nestjs/common';
import { PersonModule } from './api/v1/person/person.module';

@Module({
  imports: [PersonModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
