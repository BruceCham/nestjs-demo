import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

// typeorm 使用 entity 装饰器，自动生成posts表，以及包含它们的元数据
// 如果不填写参数，默认以class命名的小写为table名
@Entity('posts')
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number; // 自增主键

  @Column()
  title: string;

  @Column()
  content: string;
}
