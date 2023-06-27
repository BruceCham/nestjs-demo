import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @ApiProperty({ description: '文章标题' })
  readonly title: string;

  @IsString()
  @ApiProperty({ description: '文章内容' })
  readonly content: string;
}
