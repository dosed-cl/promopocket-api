import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AuthEntity } from './entity/auth.entity';
import { UserType } from '@prisma/client';
import { emailFromAccount } from 'src/utils/users';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async serverLogin(account: string, secret: string): Promise<AuthEntity> {
    const email = emailFromAccount(account);
    const user = await this.prisma.user.findUnique({
      where: { email, userType: UserType.SERVER },
    });

    const isValid = await bcrypt.compare(secret, user?.password || 'not');
    if (!user || !isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
