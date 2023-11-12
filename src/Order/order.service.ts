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

  async createOrder(foodData: Partial<Order>): Promise<Order> {
    const order = this.orderRepository.create(foodData);
    return this.orderRepository.save(order);
  }
}