import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { ToursService } from './tours.service';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [ToursController],
  providers: [ToursService, PrismaService],
})
export class ToursModule {}
