import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatuscodeService } from './statuscode.service';
import { CreateStatuscodeDto } from './dto/create-statuscode.dto';
import { UpdateStatuscodeDto } from './dto/update-statuscode.dto';

@Controller('statuscode')
export class StatuscodeController {
  constructor(private readonly statuscodeService: StatuscodeService) {}

  @Post()
  create(@Body() createStatuscodeDto: CreateStatuscodeDto) {
    return this.statuscodeService.create(createStatuscodeDto);
  }

  @Get()
  findAll() {
    return this.statuscodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statuscodeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatuscodeDto: UpdateStatuscodeDto) {
    return this.statuscodeService.update(id, updateStatuscodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statuscodeService.remove(id);
  }
}
