import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {ChatMessage} from "../models/chat-message.model";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  userName: string = "";
  chatMessages: AngularFireList<ChatMessage[]> | undefined;
  chatMessage: ChatMessage = new ChatMessage();

  constructor(
    private db: AngularFireDatabase) {}

  sendMessage(msg: string){
    this.chatMessages = this.getMessages();
    this.chatMessages.push([{
      userName: this.userName,
      message: msg
      }]);
  }
  getMessages(): AngularFireList<ChatMessage[]> {
    // query to create our message feed binding
    return this.db.list('messages',ref => ref.limitToLast(25).orderByKey());
  }
}
