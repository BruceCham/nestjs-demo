import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostsDto, Post } from './posts.interface';
import { Post as PostModel } from './posts.entity';

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

  getPostById(id: string) {
    return {
      id,
    };
    // return this.postRepository.findOne(id);
  }

  putPostById(id: string, post: CreatePostsDto) {
    return {
      id,
      post,
    };
  }

  deleteById(id: string) {
    return {
      id,
    };
    // const index = this.posts.findIndex((item) => item.id === id);
    // return this.posts.splice(index, 1);
  }
}
