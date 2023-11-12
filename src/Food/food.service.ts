// profile.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from './food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  async saveFood(data: {
    food_name: string;
    food_details: string;
    food_category: string;
    food_price: string;
    food_addon_category: string;
    food_image?: string;
    cooking_time: string;
    // restaurant_logo?: string; // Make the field optional
    // restaurant_cover?: string; // Make the field optional
  }): Promise<Food> {
    const food = this.foodRepository.create(data);
    return this.foodRepository.save(food);
  }
}

