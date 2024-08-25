import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.services';
@Controller('messages')
export class MessagesController {
  messageService: MessageService;
  constructor() {
    //do not write in actual app as this will be handled by the nest js DI
    this.messageService = new MessageService();
  }
  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  getMessageById(@Param('id') id: string, @Query('validate') validate: any) {
    return this.messageService.findOne(id);
  }
}
