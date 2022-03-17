import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {ChatMessage} from "../models/chat-message.model";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  userName: string = "swag";
  chatMessage: ChatMessage = new ChatMessage();
  chatMessages: AngularFireList<ChatMessage[]>;
  constructor(
    private db: AngularFireDatabase) {
    this.chatMessages=this.getMessages();
  }
getDB(): AngularFireDatabase{
    return this.db;
}
  sendMessage(msg: string){
    this.chatMessages = this.getMessages();
    this.chatMessages.push([{
      userName: this.userName,
      message: msg
      }]);
    console.log("asugsdjadjadak")
  }
  getMessages(): AngularFireList<ChatMessage[]> {
    return this.db.list('messages',ref => ref.limitToLast(25).orderByKey());
  }
  getLastMessage(){
    return this.db.list('messages', ref => ref.orderByKey().limitToLast(1)).valueChanges();
  }
  getMessagesObservable() {
  return this.db.list('messages', ref => ref.orderByKey().limitToLast(25)).valueChanges();
}

}
