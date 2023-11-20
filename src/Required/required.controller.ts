import { Body, Controller, Param, Post, Get,} from '@nestjs/common';
import { RequiredService } from './required.service';

  @Controller('required')
  export class RequiredController {
    constructor(
      private requiredService: RequiredService,
    ) {} 
    @Post('/item')
    createItem(@Body() body: any) {
      this.requiredService.create(
        body.addon_category,
        body.size,
        body.price,
      );
      return "created"
    } 
  @Post('/:id')
  addItem(@Param('id') id: string) {
    return this.requiredService.findOne(parseInt(id));
  }
  @Get('/find')
  findItem(@Param('id')id: number) {
    return this.requiredService.find(id); 
  }
}