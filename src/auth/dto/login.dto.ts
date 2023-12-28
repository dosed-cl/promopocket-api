import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ServerLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  account: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  secret: string;
}
