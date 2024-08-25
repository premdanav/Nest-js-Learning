import { Injectable } from '@nestjs/common';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessageService {
  constructor(public messageRepo: MessageRepository) {}

  findOne(id: string) {
    this.messageRepo.findOne(id);
  }

  findAll() {
    this.messageRepo.findAll();
  }
  create(content: string) {
    this.messageRepo.create(content);
  }
}
