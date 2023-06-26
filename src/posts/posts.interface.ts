import { ApiProperty } from '@nestjs/swagger';

export class CreatePostsDto {
  @ApiProperty({ description: '文章标题' })
  readonly title: string;

  @ApiProperty({ description: '文章内容' })
  readonly content: string;
}

export interface Post {
  title: string;
  content: string;
}
