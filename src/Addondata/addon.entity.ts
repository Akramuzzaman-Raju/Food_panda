// src/addon.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Addontable')
export class Addons {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  addon_name: string;

  @Column()
  addon_category: string;

  @Column()
  addon_price: number;
}
