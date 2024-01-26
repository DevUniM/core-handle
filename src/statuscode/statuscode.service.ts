import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStatuscodeDto } from './dto/create-statuscode.dto';
import { UpdateStatuscodeDto } from './dto/update-statuscode.dto';
import { Statuscode } from './entities/statuscode.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatuscodeService {
  constructor(
    @InjectRepository(Statuscode)
    private usersRepository: Repository<Statuscode>,
  ) {}

  create(createStatuscodeDto: CreateStatuscodeDto) {
    return this.usersRepository.save(createStatuscodeDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: string): Promise<Statuscode> {
    return this.usersRepository.findOne({ where : {id} });
  }

  async update(id: string, body: UpdateStatuscodeDto) {
    const updateResult = await this.usersRepository.update(id, body);
    if (!updateResult.affected) {
      throw new NotFoundException();
    }

    return {
      isSuccess: true,
      message: 'Updated successfully',
    };
  }

  async remove(id: string) {
    const updateResult = await this.usersRepository.softDelete(id);
    if (!updateResult.affected) {
      throw new NotFoundException();
    }

    return {
      isSuccess: true,
      message: 'Delete successfully',
    };
  }
}
