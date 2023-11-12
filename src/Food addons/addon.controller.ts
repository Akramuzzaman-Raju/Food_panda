import {
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Put,
    Patch,
    Get,
  } from '@nestjs/common';
import { AddonDto } from './addon.dto';
import { AddonService } from './addon.service';
  
  @Controller('schedules')
  export class AddonController {
    constructor(
      private addonService: AddonService,
    ) {}
    @Post('/meeting')
    createMeeting(@Body() body: AddonDto) {
      this.addonService.create(
        body.addon_name,
        body. addon_category,
        body.addon_price,
        
      );
      return "new meeting created successfully"
    }
  
}