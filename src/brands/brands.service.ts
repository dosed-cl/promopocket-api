import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    const { categories, ...brand } = createBrandDto;
    return this.prisma.brand.create({
      data: {
        ...brand,
        categories: {
          connect: categories?.map(({ id }) => ({ id })),
        },
      },
    });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: number) {
    return this.prisma.brand.findFirstOrThrow({
      where: { id },
      include: { categories: true },
    });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    const { categories, ...brand } = updateBrandDto;
    return this.prisma.brand.update({
      where: { id },
      data: {
        ...brand,
        categories: categories
          ? {
              set: [],
              connect: categories?.map(({ id }) => ({ id })),
            }
          : undefined,
      },
      include: {
        categories: true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.brand.delete({ where: { id } });
  }
}
