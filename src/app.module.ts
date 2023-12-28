import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { BrandsModule } from './brands/brands.module';
import { BenefitsModule } from './benefits/benefits.module';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    CategoriesModule,
    BrandsModule,
    BenefitsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
