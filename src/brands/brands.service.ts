import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandsService {
  constructor(private prisma: PrismaService) {}

  create(createBrandDto: CreateBrandDto) {
    return this.prisma.brand.create({ data: createBrandDto });
  }

  findAll() {
    return this.prisma.brand.findMany();
  }

  findOne(id: number) {
    return this.prisma.brand.findFirstOrThrow({ where: { id } });
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    return this.prisma.brand.update({
      where: { id },
      data: updateBrandDto,
    });
  }

  remove(id: number) {
    return this.prisma.brand.delete({ where: { id } });
  }
}
