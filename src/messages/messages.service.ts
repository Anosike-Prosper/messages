import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor(messagesRepo: MessagesRepository) {
    this.messagesRepo = messagesRepo;
  }

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.find();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
