import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RequiredItems } from './required.entity';
@Injectable()
export class RequiredService {
  constructor(
    @InjectRepository(RequiredItems) private repo: Repository<RequiredItems>,
  ) {}

  create(addon_category: string, size: string, price: number ) {
    const requireditems = this.repo.create({
      addon_category,
      size,
      price,
    });

    return this.repo.save(requireditems);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(id: number) {
    return this.repo.findBy({ id });
  }

  async remove(id: number) {
    const requiredItems = await this.findOne(id);
    if (!requiredItems) {
      // throw new NotFoundException('meeting not found');
    }
    return this.repo.remove(requiredItems);
  }
}
