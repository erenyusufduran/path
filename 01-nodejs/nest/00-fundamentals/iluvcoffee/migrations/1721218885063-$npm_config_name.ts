import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1721218885063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE coffee ADD description character varying',
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE coffee DROP COLUMN description',
      undefined,
    );
  }
}
