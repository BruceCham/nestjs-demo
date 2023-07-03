import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
@ApiTags('文章 - 相关接口')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '获取文章列表' })
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: '创建文章信息' })
  async create(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定文章信息' })
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑指定文章的信息' })
  async update(@Param('id') id: number, @Body() post: UpdatePostDto) {
    return this.postsService.update(id, post);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定文章' })
  async remove(@Param('id') id: number) {
    return this.postsService.remove(id);
  }
}
