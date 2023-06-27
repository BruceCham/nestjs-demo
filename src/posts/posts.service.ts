import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto, Post } from './dto/post.dto';
import { Post as PostModel } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostModel) private postRepository: Repository<PostModel>,
  ) {}

  private readonly posts: Post[] = [];

  async create(post: Post) {
    return this.postRepository.insert(post);
  }

  getPosts() {
    return this.postRepository.find();
  }

  getPostById(id: number) {
    return this.postRepository.findOneBy({ id });
  }

  async putPostById(id: number, post: PostDto) {
    return await this.postRepository.update(id, post);
  }

  deleteById(id: number) {
    return this.postRepository.delete(id);
  }
}
