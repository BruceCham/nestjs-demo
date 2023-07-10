/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-09 15:09:52
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-07-10 15:32:53
 * @FilePath: /nestjs-demo/src/records/dto/record.dto.ts
 * @Description: 
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RecordDto {
  @IsString()
  @ApiProperty({ description: '设备sn号' })
  readonly sn: string;

  @IsString()
  @ApiProperty({ description: '节点变更记录数据' })
  readonly record: string;

  @IsString()
  @ApiProperty({ description: 'apm上报的日志数据' })
  readonly apmEvent?: string;
}