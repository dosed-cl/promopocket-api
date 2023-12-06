import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  @MaxLength(256)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty()
  displayName: string;

  @IsOptional()
  @ApiProperty({ required: false, default: [] })
  alias?: string[] = [];
}
