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
import { CreatePostsDto } from './posts.interface';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('文章模块相关接口')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  @ApiOperation({ summary: '获取文章列表' })
  index() {
    return this.postsService.getPosts();
  }

  @Post()
  @ApiOperation({ summary: '创建文章信息' })
  async createPost(@Body() createPostsDto: CreatePostsDto) {
    return this.postsService.create(createPostsDto);
  }

  @Get(':id')
  @ApiOperation({ summary: '获取指定文章信息' })
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑指定文章的信息' })
  async updatePost(@Param('id') id: string, @Body() body: CreatePostsDto) {
    return this.postsService.putPostById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除指定文章' })
  async deletePost(@Param('id') id: string) {
    return this.postsService.deleteById(id);
  }
}
