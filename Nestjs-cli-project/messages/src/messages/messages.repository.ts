import { readFile, writeFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const message = messages[id];
    return message;
  }
  async findAll() {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    return messages;
  }
  async create(content: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.round(Math.random() * 999);
    messages[id] = { id, content };
    await writeFile('messages.json', JSON.stringify(messages));
  }
}
