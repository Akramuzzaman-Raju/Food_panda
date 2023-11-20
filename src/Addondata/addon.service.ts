// src/addon.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Addons } from './addon.entity';

@Injectable() 
export class AddonService {
  constructor(
    @InjectRepository(Addons)
    private readonly addonRepository: Repository<Addons>,
  ) {}

  async create(data: { addon_name: string, addon_category: string, addon_price: number }): Promise<Addons> {
    const addon = this.addonRepository.create(data);
    return this.addonRepository.save(addon);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.addonRepository.findOneBy({ id });
  }
  find(id: number) {
    return this.addonRepository.findBy({ id });
  }
}
