import { MigrationInterface, QueryRunner } from 'typeorm';
import { Logger } from '@nestjs/common';

export class $npmConfigName1721212639773 implements MigrationInterface {
  private readonly logger = new Logger('npmConfigName1721212639773');
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('ALTER TABLE coffee RENAME COLUMN name to title');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Down');
    await queryRunner.query('ALTER TABLE coffee RENAME COLUMN title to name');
  }
}
