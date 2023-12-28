import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUrl,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

class RelatedId {
  @IsNumber()
  @ApiProperty()
  id: number;
}
export class CreateBrandDto {
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
  url: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  logo: string;

  @IsOptional()
  @IsArray()
  @ApiProperty({ required: false, default: [] })
  alias?: string[] = [];

  @IsOptional()
  @IsArray()
  @ApiProperty({ type: [RelatedId], required: false })
  categories: [RelatedId];
}
