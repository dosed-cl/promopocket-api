import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ServerLoginDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  account: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  secret: string;

  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiProperty()
  password: string;
}
