import { MessageRepository } from './messages.repository';

export class MessageService {
  messageRepo: MessageRepository;

  constructor() {
    //services creating itw own dependencies
    //but this will be handled by nest js using DI
    this.messageRepo = new MessageRepository();
  }

  findOne(id: string) {
    this.messageRepo.findOne(id);
  }

  findAll() {
    this.messageRepo.findAll();
  }
  create(message: string) {
    this.create(message);
  }
}
