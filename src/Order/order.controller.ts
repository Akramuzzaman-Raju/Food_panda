// // profile.controller.ts
// import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
// import { FilesInterceptor } from '@nestjs/platform-express';
// import { Order } from './order.entity';
// import { OrderService } from './order.service';



// @Controller('order')
// export class OrderController {
//   constructor(private readonly orderService: OrderService) {}

//   @Post('create')
//   create(@Body() body: any) {
//     this.orderService.create(
//         body.order_time,
//         body.order_table, 
//         body.order_item,
//         body.order_addon,
//         // body.order_requried_item,
//         body.order_quantity,
//         body.order_total_price,
//         body.order_type,
//         body.payment_option, 
//         body.payment_status,
//         body.order_status,
//         body.order_issue,
//         body.total_cooking_time,
//       );
//       return ("order created")
//     }
// }

// profile.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  create(@Body() body: any) {
    this.orderService.create(body);
    return "order created";
  }
}
