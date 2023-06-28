import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const MySQL: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'rootroot',
  database: 'test',
  autoLoadEntities: true, // 自动加载实体，生产环境不建议使用
  synchronize: true, // 实体变更时，同步到数据库，生产环境不能使用
};
