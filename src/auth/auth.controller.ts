import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AuthEntity } from './entity/auth.entity';
import { ServerLoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() params: ServerLoginDto) {
    if (params.account && params.secret)
      return this.authService.serverLogin(params.account, params.secret);
    else if (params.email && params.password)
      return this.authService.login(params.email, params.password);

    throw new UnauthorizedException('Invalid credentials');
  }
}
