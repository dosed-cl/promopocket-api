import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
  IsJSON,
} from 'class-validator';
import { RedeemType, ValueType } from '@prisma/client';

class RelatedId {
  @IsNumber()
  @ApiProperty()
  id: number;
}

export class CreateBenefitDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @ApiProperty()
  externalId: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  redeemType: RedeemType;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  valueType: ValueType;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  value: number;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  image: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  url: string;

  @IsString()
  @IsOptional()
  @ApiProperty()
  terms: string;

  @IsUrl()
  @IsOptional()
  @ApiProperty()
  termsUrl: string;

  @IsDateString()
  @ApiProperty()
  startDate: string;

  @IsDateString()
  @ApiProperty()
  endDate: string;

  @IsJSON()
  @ApiProperty()
  daysAvaiable: object;

  @IsNumber()
  @ApiProperty()
  sponsorId: number;

  @IsNumber()
  @ApiProperty()
  benefactorId: number;

  @IsOptional()
  @IsArray()
  @ApiProperty({ type: [RelatedId] })
  categories?: [RelatedId];
}
