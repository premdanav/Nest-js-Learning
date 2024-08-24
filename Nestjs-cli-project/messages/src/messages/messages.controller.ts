import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: any) {
    console.log(`boyd`, body);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string, @Query('validate') validate: any) {
    console.log(`id`, id);
    console.log(`validate`, validate);
  }
}
