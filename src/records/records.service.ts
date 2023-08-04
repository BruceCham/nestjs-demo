/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-09 14:22:08
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-08-04 16:15:21
 * @FilePath: /nestjs-demo/src/records/records.service.ts
 * @Description: 
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Record } from './entities/record.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordDto } from './dto/record.dto';


@Injectable()
export class RecordsService {
  constructor(
    @InjectRepository(Record)
    private readonly recordRepository: Repository<Record>,
  ) { }

  findAll() {
    return this.recordRepository.find();
  }

  async findOne(id: number) {
    const record = await this.recordRepository.findOne(id);
    if (!record) {
      throw new NotFoundException(`record ${id} not found`);
    }
    return record;
  }

  async create(recordDto: RecordDto) {
    const coffee = this.recordRepository.create(recordDto);
    return this.recordRepository.save(coffee);
  }

  async remove(id: number) {
    const record = await this.recordRepository.preload({
      id: `${id}`,
      isDel: 1,
    });
    if (!record) {
      throw new NotFoundException(`record ${id} not found`);
    }
    return this.recordRepository.save(record);
  }

  async delete(id: number) {
    const record = await this.findOne(id);
    return this.recordRepository.remove(record);
  }
}