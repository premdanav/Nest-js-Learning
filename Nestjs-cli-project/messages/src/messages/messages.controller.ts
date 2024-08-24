import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    console.log(`boyd`, body);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string, @Query('validate') validate: any) {
    console.log(`id`, id);
    console.log(`validate`, validate);
  }
}
