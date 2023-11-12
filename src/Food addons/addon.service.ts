import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Addons } from './addon.entity';
@Injectable()
export class AddonService {
  constructor(
    @InjectRepository(Addons) private repo: Repository<Addons>,
  ) {}

  create(addon_name: string, addon_category: string, addon_price: string) {
    const addons = this.repo.create({
        addon_name,
        addon_category,
        addon_price,
      
    });

    return this.repo.save(addons);
  }
}