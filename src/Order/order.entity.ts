// order.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column({ nullable: true, default: '' })
  order_time: string;

  @Column({ nullable: true, default: '' })
  order_table: string;

  @Column({ nullable: true, default: '' })
  order_item: string;

  @Column({ nullable: true, default: '' })
  order_addon: string;

  @Column({ nullable: true, default: '' })
  order_requried_item: string;

  @Column({ nullable: true, default: '' })
  order_quantity: string;

  @Column({ nullable: true, default: '' })
  order_total_price: string;

  @Column({ nullable: true, default: '' })
  order_type: string;

  @Column({ nullable: true, default: '' })
  payment_option: string;

  @Column({ nullable: true, default: '' })
  payment_status: string;

  @Column({ nullable: true, default: '' })
  order_status: string;

  @Column({ nullable: true, default: '' })
  order_issue: string;

  @Column({ nullable: true, default: '' })
  total_cooking_time: string;
}
