// profile.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
@Injectable()
export class OrderService { 
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  // async createOrder(foodData: Partial<Order>): Promise<Order> {
  //   const order = this.orderRepository.create(foodData);
  //   return this.orderRepository.save(order);
  // }

  create(order_time: string,order_table: string, order_item: string, order_addon: string, order_quantity: string, order_total_price: string, order_type: string, payment_option: string, payment_status: string, order_status: string, order_issue: string, total_cooking_time: string) {
    const order = this.orderRepository.create({
        order_time,
        order_table,
        order_item,
        order_addon,
        order_quantity,
        order_total_price,
        order_type,
        payment_option,
        payment_status,
        order_status,
        order_issue,
        total_cooking_time,
    });

    return this.orderRepository.save(order);
  }
}