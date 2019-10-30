import { Module } from '@nestjs/common';
import { MysqlController } from './mysql.controller';

@Module({
  controllers: [MysqlController],
})
export class MysqlModule {}
