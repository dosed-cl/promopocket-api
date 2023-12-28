import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { BenefitsService } from './benefits.service';
import {
  BenefitEntity,
  BenefitEntityFull,
  BenefitEntityMin,
} from './entities/benefit.entity';
import { CreateBenefitDto } from './dto/create-benefit.dto';
import { UpdateBenefitDto } from './dto/update-benefit.dto';
import { Auth } from 'src/auth/auth.decorator';

@Controller('benefits')
@ApiTags('Benefits')
export class BenefitsController {
  constructor(private readonly benefitsService: BenefitsService) {}

  @Post()
  @Auth('SERVER')
  @ApiCreatedResponse({ type: BenefitEntityFull })
  create(@Body() createBenefitDto: CreateBenefitDto) {
    return this.benefitsService.create(createBenefitDto);
  }

  @Get()
  @ApiOkResponse({ type: BenefitEntityMin, isArray: true })
  findAll() {
    return this.benefitsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: BenefitEntityFull })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.benefitsService.findOne(id);
  }

  @Patch(':id')
  @Auth('SERVER')
  @ApiOkResponse({ type: BenefitEntityFull })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBenefitDto: UpdateBenefitDto,
  ) {
    return this.benefitsService.update(id, updateBenefitDto);
  }

  @Delete(':id')
  @Auth('SERVER')
  @ApiOkResponse({ type: BenefitEntity })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.benefitsService.remove(id);
  }
}
