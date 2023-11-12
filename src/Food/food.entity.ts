// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  food_name: string;

  @Column()
  food_details: string;
  @Column()
  food_category: string;
  @Column()
  food_price: string;
  @Column()
  food_addon_category: string;

  @Column()
  food_image: string; // Store the path or filename of the cover photo

  @Column()
  cooking_time: string;
}
