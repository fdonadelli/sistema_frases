import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePersonUseCase } from '../../application/usecases/create-person/create-person.usecase';
import { CreatePersonInputDto } from './dto/person.dto';
import { GetAllPersonsUseCase } from '../../application/usecases/get-all-persons/get-all-persons.usecase';

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  private readonly logger: Logger;

  constructor(
    private createPersonUsecase: CreatePersonUseCase,
    private getAllPersonsUsecase: GetAllPersonsUseCase,
  ) {
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

  @ApiOperation({
    description: 'Pega todas as persons',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Responde com um array de Person',
  })
  @Get('')
  async findAll() {
    this.logger.log(`Starts getting all persons `);
    try {
      return await this.getAllPersonsUsecase.execute();
    } catch (error) {
      this.logger.log(`Error to get all persons ${error}`);
      throw new BadRequestException('Ops, algo de errado aconteceu.');
    }
  }
}
