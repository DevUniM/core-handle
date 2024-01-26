import { Module } from '@nestjs/common';
import { StatuscodeService } from './statuscode.service';
import { StatuscodeController } from './statuscode.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Statuscode } from './entities/statuscode.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Statuscode])],
  controllers: [StatuscodeController],
  providers: [StatuscodeService],
})
export class StatuscodeModule {}
