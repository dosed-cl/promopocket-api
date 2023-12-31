import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsUrl,
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
  key: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty()
  name: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  color: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  image: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({ required: false, default: [] })
  alias?: string[] = [];
}
