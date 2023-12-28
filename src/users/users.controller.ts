import { Body, Controller, Get, Patch, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { Auth } from 'src/auth/auth.decorator';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Auth()
  @ApiOkResponse({ type: UserEntity })
  me(@Req() request: Request) {
    const user = request.user as User;
    return this.usersService.findOne(user.id, user.userType);
  }

  @Patch()
  @Auth('BASIC')
  @ApiOkResponse({ type: UserEntity })
  update(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    const user = request.user as User;
    return this.usersService.update(user.id, updateUserDto);
  }
}
