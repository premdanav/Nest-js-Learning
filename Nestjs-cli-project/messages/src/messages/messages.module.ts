import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessageService } from './messages.services';
import { MessageRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessageService, MessageRepository], //provider-> things that can be used as dependencies by other classes
})
export class MessagesModule {}
