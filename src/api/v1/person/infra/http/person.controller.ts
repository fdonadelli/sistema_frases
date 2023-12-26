import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePersonUseCase } from '../../application/usecases/create-person/create-person.usecase';
import { CreatePersonInputDto } from './dto/person.dto';

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  private readonly logger: Logger;

  constructor(private createPersonUsecase: CreatePersonUseCase) {
    this.logger = new Logger(PersonController.name);
  }

  @ApiOperation({
    description: 'Cria um person',
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Responde que criou a person',
  })
  @Post('')
  async create(@Body() payload: CreatePersonInputDto) {
    this.logger.log(`Starts create person `);
    try {
      await this.createPersonUsecase.execute(payload);
    } catch (error) {
      this.logger.log(`Error to create person ${error}`);
      throw new BadRequestException('Ops, algo de errado aconteceu.');
    }
  }
}
