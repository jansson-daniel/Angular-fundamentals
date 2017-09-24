import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text: 'You have got mail'},
    {id: 1, text: 'You have anonther mail'},
    {id: 2, text: 'You have got new mail'}
  ];

  constructor () {}

  update (id, text) {
    this.messages = this.messages.map(message =>
      message.id === id ? { id, text } : message
    );
  }
}
