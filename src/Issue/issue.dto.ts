import { IsNotEmpty } from 'class-validator';
  
  export class IssueDto {
    @IsNotEmpty()
    issue: string;
    
  }