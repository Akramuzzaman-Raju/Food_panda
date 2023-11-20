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
  restaurant_logo: string; 

  @Column()
  restaurant_cover: string; 
  @Column()
  restaurant_cookingtime: string;
}
