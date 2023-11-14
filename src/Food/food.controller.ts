// profile.controller.ts
import { Response } from 'express';

import { Controller, Post, UseInterceptors, UploadedFiles, Body, Get, Param, Res, Delete } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as path from 'path';
import { FoodService } from './food.service';

@Controller('images')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Post('/food')
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


  // @Get('allimages')
  // async serveAllImages(@Res() res: Response) {
  //   try {
  //     const allImages = await this.foodService.getAllImageFilenames();
  //       for (const filename of allImages) {
  //       const imagePath = path.join(process.cwd(), filename);  
  //       res.sendFile(imagePath);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'Error serving images' });
  //   }
  // }



  @Get('/find')
  async findData(@Param('id') id: number, @Res() res: Response) {
  try {
    const foodData = await this.foodService.find(id);

    if (!foodData || foodData.length === 0) {
      return res.status(404).json({ message: 'Food not found' });
    }

    const responseData = foodData.map(food => ({
      food_name: food.food_name,
      food_details: food.food_details,
      food_category: food.food_category,
      food_price: food.food_price,
      food_addon_category: food.food_addon_category,
      cooking_time: food.cooking_time,
      food_image: path.join('/',food.food_image),
    }));

    res.json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving food data' });
  }
}
@Delete('/:id')
  removeMeeting(@Param('id')  id: string) {
    return this.foodService.remove(parseInt( id));
  }
}
