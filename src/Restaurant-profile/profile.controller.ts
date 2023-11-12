// profile.controller.ts
import { Controller, Post, UseInterceptors, UploadedFiles, Body } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ProfileService } from './profile.service';

@Controller('images')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('upload/images')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'restaurant_logo', maxCount: 1 },
    { name: 'restaurant_cover', maxCount: 1 },
  ]))
  async uploadFile(
    @UploadedFiles() files: { restaurant_logo?: Express.Multer.File[], restaurant_cover?: Express.Multer.File[] },
    @Body() data: {
      restaurant_name: string,
      restaurant_details: string,
      restaurant_cookingtime: string,
    }
  ) {
    try {
      await this.profileService.saveProfile({
        restaurant_name: data.restaurant_name,
        restaurant_details: data.restaurant_details,
        restaurant_cookingtime: data.restaurant_cookingtime,

        restaurant_logo: files.restaurant_logo ? files.restaurant_logo[0].path : '',
        restaurant_cover: files.restaurant_cover ? files.restaurant_cover[0].path : '',
      });

      return { message: 'Files and data stored successfully' };
    } catch (error) {
      console.error(error);
      return { message: 'Error uploading files and data' };
    }
  }
}
