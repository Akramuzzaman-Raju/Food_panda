import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RequiredItems {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  addon_category: string;
  @Column()
  size: string;
  @Column()
  price: number;
  
}
