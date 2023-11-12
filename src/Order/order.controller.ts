// profile.controller.ts
import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Order } from './order.entity';
import { OrderService } from './order.service';



@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadOrder(
    // @UploadedFiles() files: Express.Multer.File[],
    @Body() body: {
        order_time: string;
        order_table: string;
        order_item: string;
        order_addon: string;
        order_quantity: string;
        order_total_price: string;
        order_type: string;
        payment_option: string;
        payment_status: string;
        order_status: string;
        order_issue: string;
        total_cooking_time: string;

    },
  ): Promise<Order> {

    const orderData: Partial<Order> = {
        order_time: body.order_time,
        order_table: body.order_table,
        order_item: body.order_item,
        order_addon: body.order_addon,
        order_quantity: body.order_quantity,
        order_total_price: body.order_total_price,
        order_type: body.order_type,
        payment_option: body.payment_option,
        payment_status: body.payment_status,
        order_status: body.order_status,
        order_issue: body.order_issue,
        total_cooking_time: body.total_cooking_time,
    };

    return this.orderService.createOrder(orderData);
  }
}