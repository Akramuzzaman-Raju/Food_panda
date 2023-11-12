import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('issues')
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  issue: string;
  
}
