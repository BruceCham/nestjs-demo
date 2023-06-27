import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  private readonly posts: CreatePostDto[] = [];

  async create(post: CreatePostDto) {
    return this.postRepository.insert(post);
  }

  getPosts() {
    return this.postRepository.find();
  }

  getPostById(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async putPostById(id: number, post: UpdatePostDto) {
    return await this.postRepository.update(id, post);
  }

  deleteById(id: number) {
    return this.postRepository.delete(id);
  }
}
