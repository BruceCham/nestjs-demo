import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('cats')
@ApiTags('cats api')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @ApiOperation({
    summary: '创建 cats',
  })
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
    return 'message success';
  }

  @ApiOperation({
    summary: '获取 cats 信息',
  })
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
