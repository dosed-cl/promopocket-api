import { Reflector } from '@nestjs/core';
import { UseGuards, applyDecorators } from '@nestjs/common';
import { UserType } from '@prisma/client';
import { ApiBearerAuth } from '@nestjs/swagger';

import { AuthGuard } from './auth.guard';

export const AuthTypes = Reflector.createDecorator<UserType[]>();

export function Auth(...userTypes: UserType[]) {
  return applyDecorators(
    AuthTypes(userTypes),
    UseGuards(AuthGuard),
    ApiBearerAuth(),
  );
}
