import { Logger } from '@nestjs/common';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1721498339080 implements MigrationInterface {
  private readonly logger = new Logger('npmConfigName1721498339080');
  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('ALTER TABLE coffee RENAME COLUMN title to name');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Down');
    await queryRunner.query('ALTER TABLE coffee RENAME COLUMN name to title');
  }
}
