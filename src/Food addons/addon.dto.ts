import {
    IsNotEmpty,
  } from 'class-validator';
  
  export class AddonDto {
    @IsNotEmpty()
    addon_name: string;
    @IsNotEmpty()
    addon_category: string;
    @IsNotEmpty()
    addon_price: string;
  }