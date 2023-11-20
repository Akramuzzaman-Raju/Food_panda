// src/addon.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AddonService } from './addon.service';

@Controller('addons')
export class AddonController {
  constructor(private readonly addonService: AddonService) {}

  @Post('/add') 
  createAddon(@Body() body: { addon_name: string, addon_category: string, addon_price: number }) {
    return this.addonService.create(body);
  }
  @Get('/find')
  findAddon(@Param('id') id: number) {
    return this.addonService.find(id);
  }
}
