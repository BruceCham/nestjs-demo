// 数据库迁移文件
// npx typeorm migration:create -n CoffeeRefactor
module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'rootroot',
  database: 'test',
  autoLoadEntities: true, // 自动加载实体，生产环境不建议使用
  synchronize: true, // 实体变更时，同步到数据库，生产环境不能使用
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
