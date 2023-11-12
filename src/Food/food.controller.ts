// profile.controller.ts
import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { FoodService } from './food.service';

@Controller('images')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post('upload/food')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'food_image', maxCount: 1 },
    // { name: 'restaurant_cover', maxCount: 1 },
  ]))
  async uploadFile(
    @UploadedFiles() files: { food_image?: Express.Multer.File[]},
    @Body() data: {
    food_name: string;
    food_details: string;
    food_category: string;
    food_price: string;
    food_addon_category: string;
    // food_image?: string;
    cooking_time: string;
    }
  ) {
    try {
      await this.foodService.saveFood({
        food_name: data.food_name,
        food_details: data.food_details,
        food_category: data.food_category,
        food_price: data.food_price,
        food_addon_category: data.food_addon_category,
        cooking_time: data.cooking_time,
        food_image: files.food_image ? files.food_image[0].path : ''
        
      });

      return { message: 'Files and data uploaded successfully' };
    } catch (error) {
      console.error(error);
      return { message: 'Error uploading files and data' };
    }
  }
}
