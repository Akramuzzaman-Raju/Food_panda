// profile.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async saveProfile(data: {
    restaurant_name: string;
    restaurant_details: string;
    restaurant_cookingtime: string;
    restaurant_logo?: string; // Make the field optional
    restaurant_cover?: string; // Make the field optional
  }): Promise<Profile> {
    const profile = this.profileRepository.create(data);
    return this.profileRepository.save(profile);
  }
}
