import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('review')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  rating: string;
  @Column()
  review: string;
  
}
