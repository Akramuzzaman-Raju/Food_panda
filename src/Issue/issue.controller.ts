import { Body, Controller, Param, Post, Get,} from '@nestjs/common';
import { IssueDto } from './issue.dto';
import { IssueService } from './issue.service';

  

  @Controller('issues')
  export class IssueController {
    constructor(
      private issueService: IssueService,
    ) {} 
    @Post('/issue')
    createReview(@Body() body: IssueDto) {
      this.issueService.create(
        body.issue,
      );
      return "issue sent"
    }
  @Post('/:id')
  addMeeting(@Param('id') id: string) {
    return this.issueService.findOne(parseInt(id));
  }
  @Get('/find')
  findMeeting(@Param('id')id: string) {
    return this.issueService.find(id);
  }
}