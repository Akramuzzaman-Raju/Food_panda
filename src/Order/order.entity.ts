// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  order_id: number;

  @Column()
  order_time
: string;

  @Column()
  order_table
: string;

  @Column()
  order_item: string; 

  @Column()
  order_addon: string;

  @Column()
  order_quantity: string;

  @Column()
  order_total_price: string; 

  @Column()
  order_type: string;

  @Column()
  payment_option: string;

  @Column()
  payment_status: string; 

  @Column()
  order_status: string; 

  @Column()
  order_issue: string; 

  @Column()
  total_cooking_time: string; 
}
