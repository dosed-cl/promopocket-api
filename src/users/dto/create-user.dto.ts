import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, IsEmail } from 'class-validator';

export class CreateServerUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  account: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  secret: string;
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;
}
