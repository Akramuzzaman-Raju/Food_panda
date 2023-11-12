// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  restaurant_name: string;

  @Column()
  restaurant_details: string;

  @Column()
  restaurant_logo: string; // Store the path or filename of the profile photo

  @Column()
  restaurant_cover: string; // Store the path or filename of the cover photo

  @Column()
  restaurant_cookingtime: string;
}
