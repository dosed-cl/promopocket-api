import { Brand } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BrandEntity implements Brand {
  @ApiProperty()
  id: number;

  @ApiProperty()
  key: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  url: string | null;

  @ApiProperty()
  logo: string | null;

  @ApiProperty({ required: false, default: [] })
  alias: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
