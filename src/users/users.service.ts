import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserType } from '@prisma/client';

import { CreateServerUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { emailFromAccount, hashPassword } from 'src/utils/users';

const selectMin = {
  email: true,
  userType: true,
  createdAt: true,
  updatedAt: true,
};
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createServer(createUserDto: CreateServerUserDto) {
    return this.prisma.user.create({
      data: {
        userType: UserType.SERVER,
        email: emailFromAccount(createUserDto.account),
        password: await hashPassword(createUserDto.secret),
      },
    });
  }

  findOne(id: number, userType: UserType = UserType.BASIC, full = false) {
    return this.prisma.user.findFirstOrThrow({
      where: { id, userType },
      select: full ? null : selectMin,
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const password = updateUserDto.password
      ? await hashPassword(updateUserDto.password)
      : undefined;
    return this.prisma.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password,
      },
      select: selectMin,
    });
  }
}
