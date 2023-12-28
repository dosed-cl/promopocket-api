import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';

const includeAll = {
  categories: true,
  sponsor: true,
  benefactor: true,
};

const includeMin = {
  categories: { select: { id: true, name: true, color: true } },
  sponsor: { select: { id: true, name: true, logo: true } },
  benefactor: { select: { id: true, name: true, logo: true } },
};

@Injectable()
export class BenefitsService {
  constructor(private prisma: PrismaService) {}

  create(createBenefitDto: CreateBenefitDto) {
    const { categories, ...benefit } = createBenefitDto;
    return this.prisma.benefit.create({
      data: {
        ...benefit,
        categories: {
          connect: categories?.map(({ id }) => ({ id })),
        },
      },
      include: includeAll,
    });
  }

  findAll() {
    return this.prisma.benefit.findMany({ include: includeMin });
  }

  findOne(id: number) {
    return this.prisma.benefit.findFirstOrThrow({
      where: { id },
      include: includeAll,
    });
  }

  update(id: number, updateBenefitDto: UpdateBenefitDto) {
    const { categories, ...benefit } = updateBenefitDto;
    return this.prisma.benefit.update({
      where: { id },
      data: {
        ...benefit,
        categories: categories
          ? {
              set: [],
              connect: categories?.map(({ id }) => ({ id })),
            }
          : undefined,
      },
      include: includeAll,
    });
  }

  remove(id: number) {
    return this.prisma.benefit.delete({ where: { id } });
  }
}
