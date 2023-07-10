/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-09 14:21:27
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-07-09 16:01:46
 * @FilePath: /nestjs-demo/src/records/records.module.ts
 * @Description: 
 */
import { Module } from '@nestjs/common';
import { RecordsController } from './records.controller';
import { RecordsService } from './records.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Record } from './entities/record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Record])],
  controllers: [RecordsController],
  providers: [RecordsService]
})
export class RecordsModule {}
