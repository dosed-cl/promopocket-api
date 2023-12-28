import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard as PassportGuard } from '@nestjs/passport';
import { Reflector } from '@nestjs/core';

import { AuthTypes } from './auth.decorator';

@Injectable()
export class AuthGuard extends PassportGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (!(await super.canActivate(context))) return false;

    const userTypes = this.reflector.get(AuthTypes, context.getHandler());
    if (!userTypes || userTypes.length == 0) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return userTypes.includes(user.userType);
  }
}
