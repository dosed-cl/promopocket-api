import { Category } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CategoryEntity implements Category {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  displayName: string;

  @ApiProperty({ required: false, default: [] })
  alias: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
