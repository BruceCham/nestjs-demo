/*
 * @Author: zhanglitao@zuoyebang.com
 * @Date: 2023-07-09 14:39:32
 * @LastEditors: zhanglitao@zuoyebang.com
 * @LastEditTime: 2023-07-10 11:03:24
 * @FilePath: /nestjs-demo/src/records/entities/record.entity.ts
 * @Description: 录屏记录表
 */
import { Column, CreateDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Record {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
  id: string;

  @Column("varchar", { name: "sn", length: 32 })
  sn: string;

  @Column("longtext")
  record: string;

  @Column({
    type: "longtext",
    nullable: true,
    default: () => null,
    name: "apm_event",
    comment: "apm上报数据",
  })
  apmEvent: string;

  @Column("tinyint", {
    nullable: false,
    default: () => 0,
    name: "is_del",
    comment: "是否删除， 1表示删除， 0表示正常"
  })
  isDel: number

  @CreateDateColumn({
    type: "timestamp",
    nullable: false,
    name: "created_at",
    comment: "创建时间"
  })
  createdAt: Date

  @UpdateDateColumn({
    type: "timestamp",
    nullable: false,
    name: "update_at",
    comment: "更新时间"
  })
  updateAt: Date
}
