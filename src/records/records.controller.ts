/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-09 14:21:48
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-07-09 15:12:05
 * @FilePath: /nestjs-demo/src/records/records.controller.ts
 * @Description: 
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RecordsService } from './records.service';
import { RecordDto } from './dto/record.dto';


@Controller('records')
@ApiTags('录屏数据存储 - 相关接口')
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Get()
  @ApiOperation({ summary: '获取录屏列表数据' })
  findAll() {
    return this.recordsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '增加录屏数据' })
  async create(@Body() recordDto: RecordDto) {
    return this.recordsService.create(recordDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定录屏信息' })
  findOne(@Param('id') id: number) {
    return this.recordsService.findOne(id);
  }


  @Delete(':id')
  @ApiOperation({ summary: '删除指定录屏信息' })
  async remove(@Param('id') id: number) {
    return this.recordsService.remove(id);
  }
}
