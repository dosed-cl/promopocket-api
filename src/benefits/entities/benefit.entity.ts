import { Benefit, RedeemType, ValueType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { BrandEntity, BrandEntityMin } from 'src/brands/entities/brand.entity';

export class BenefitEntity implements Benefit {
  @ApiProperty()
  id: number;

  @ApiProperty()
  externalId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  redeemType: RedeemType;

  @ApiProperty()
  valueType: ValueType;

  @ApiProperty()
  value: number;

  @ApiProperty()
  image: string | null;

  @ApiProperty()
  url: string | null;

  @ApiProperty()
  terms: string | null;

  @ApiProperty()
  termsUrl: string | null;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  daysAvailable: object;

  @ApiProperty()
  sponsorId: number;

  @ApiProperty()
  benefactorId: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class BenefitEntityFull extends BenefitEntity {
  @ApiProperty({ type: CategoryEntity, isArray: true })
  categories: CategoryEntity[];

  @ApiProperty()
  sponsor: BrandEntity;

  @ApiProperty()
  benefactor: BrandEntity;
}

export class BenefitEntityMin extends BenefitEntity {
  @ApiProperty({ type: CategoryEntity, isArray: true })
  categories: CategoryEntity[];

  @ApiProperty()
  sponsor: BrandEntityMin;

  @ApiProperty()
  benefactor: BrandEntityMin;
}
