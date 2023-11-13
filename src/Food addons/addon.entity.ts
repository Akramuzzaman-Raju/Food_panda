// image.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Addons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addon_name: string;

  @Column()
  addon_category: string;

  @Column()
  addon_price: string; 
  //rela
}
