import { Injectable } from '@nestjs/common';
import { CreatePostsDto, Post } from './posts.interface';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [];

  create(post: Post) {
    this.posts.push(post);
  }

  getPosts() {
    return this.posts;
  }

  getPostById(id: string) {
    return this.posts.find((item) => item.id === id);
  }

  putPostById(id: string, post: CreatePostsDto) {
    const index = this.posts.findIndex((item) => item.id === id);
    this.posts[index] = {
      ...post,
      id,
    };
    return this.posts[index];
  }

  deleteById(id: string) {
    const index = this.posts.findIndex((item) => item.id === id);
    return this.posts.splice(index, 1);
  }
}
