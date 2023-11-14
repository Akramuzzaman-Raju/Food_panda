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
  }): Promise<Food> {
    const food = this.foodRepository.create(data);
    return this.foodRepository.save(food);
  }

  // async findOne(id: number): Promise<Food | undefined> {
  //   if (!id) {
  //     return undefined;
  //   }
  //   return this.foodRepository.findOne({ where: { id } });
  // }

  // async find(id: number): Promise<Food | undefined> {
  //   return this.foodRepository.findOne({ where: { id } });
  // }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.foodRepository.findOneBy({ id });
  }
  find(id: number) {
    return this.foodRepository.findBy({ id });
  }
  async getAllImageDetails(): Promise<{  food_name: string, food_details: string, food_category: string, food_price: string, food_addon_category: string, cooking_time: string }[]> {
    return this.foodRepository.find({
      select: [ 'food_name', 'food_details', 'food_category', 'food_price', 'food_addon_category', 'cooking_time'],
    });
  }
  async findAll(): Promise<Food[]> {
    return this.foodRepository.find();
  }

  async remove(id: number) {
    const food = await this.findOne(id);
    if (!food) {
      return ('food not found');
    }
    return this.foodRepository.remove(food);
  }

  async getAllImageFilenames(): Promise<string[]> {
    const foods = await this.foodRepository.find();
    return foods.map(food => food.food_image).filter(image => !!image);
  }
}
