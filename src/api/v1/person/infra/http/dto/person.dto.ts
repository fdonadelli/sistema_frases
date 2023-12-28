import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonInputDto {
  @ApiProperty({ example: 'Joao Silva' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '999.999.999-99' })
  @IsNotEmpty()
  @IsString()
  cpf: string;

  @ApiProperty({ example: '99999999999' })
  @IsString()
  phone: string;
}
