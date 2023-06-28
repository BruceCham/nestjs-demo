import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
@ApiTags('咖啡 - 相关接口')
export class CoffeesController {
  constructor(private coffeeService: CoffeesService) {}

  @Get()
  @ApiOperation({ summary: '获取咖啡列表' })
  findAll() {
    return this.coffeeService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '录入咖啡信息' })
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定咖啡信息' })
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '修改指定咖啡的信息' })
  async update(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定咖啡信息' })
  async remove(@Param('id') id: number) {
    return this.coffeeService.remove(id);
  }
}
