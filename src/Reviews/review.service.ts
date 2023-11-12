import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './review.entity';
@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private repo: Repository<Review>,
  ) {}

  create(rating: string, review: string) {
    const reviews = this.repo.create({
        rating,
        review,
    });

    return this.repo.save(reviews);
  }
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  find(rating: string) {
    return this.repo.findBy({ rating });
  }

  async update(id: number, attrs: Partial<Review>) {
    const reviews = await this.findOne(id);
    if (!reviews) {
      throw new NotFoundException('error');
    }
    Object.assign(reviews, attrs);
    return this.repo.save(reviews);
  }

//   async remove(id: number) {
//     const reviews = await this.findOne(id);
//     if (!reviews) {
//       throw new NotFoundException('meeting not found');
//     }
//     return this.repo.remove(reviews);
//   }
}
