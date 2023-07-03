import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1688285046542 implements MigrationInterface {
  //  npx typeorm migration:run
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" RENAME "name" TO "title"`);
  }

  //  npx typeorm migration:revert
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffee" RENAME "title" TO "name"`);
  }
}
