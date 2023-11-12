import { IsNotEmpty } from 'class-validator';
  
  export class ReviewDto {
    @IsNotEmpty()
    rating: string;
    @IsNotEmpty()
    review: string;
  }