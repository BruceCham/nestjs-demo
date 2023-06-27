import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('文章模块相关接口')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '获取文章列表' })
  // @HttpCode(HttpStatus.GONE)
  index() {
    return this.postsService.getPosts();
  }

  @Post()
  @ApiOperation({ summary: '创建文章信息' })
  async createPost(@Body() post: PostDto) {
    return this.postsService.create(post);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定文章信息' })
  getPostById(@Param('id') id: number) {
    return this.postsService.getPostById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑指定文章的信息' })
  async updatePost(@Param('id') id: number, @Body() post: PostDto) {
    return this.postsService.putPostById(id, post);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定文章' })
  async deletePost(@Param('id') id: number) {
    return this.postsService.deleteById(id);
  }
}
