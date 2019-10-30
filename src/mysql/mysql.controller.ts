import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import mysqldump, { DumpReturn } from 'mysqldump';
import { connections } from '../config';

@Controller('mysql')
export class MysqlController {
  @MessagePattern({ cmd: 'backup-mysql' })
  backup(key: string): Promise<DumpReturn> {
    const connection = connections[key];
    if (connection) {
      return mysqldump({
        connection,
      });
    } else {
      throw new RpcException('Connection Not Exists');
    }
  }

  @MessagePattern({ cmd: 'list-connections' })
  async connections(): Promise<any> {
    return connections;
  }
}
