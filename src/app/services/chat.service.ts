import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {ChatMessage} from "../models/chat-message.model";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {Faehigkeiten} from "../models/fertigkeiten";
import {Player} from "../models/player";
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

  sendChatMessage(msg: ChatMessage) {
    this.chatMessages = this.getMessages();
    this.chatMessages.push([{
      userName: msg.userName,
      message: msg.message
    }]);
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
  rollTalents(talent: Faehigkeiten, player:Player){
    let talentRoll: number = this.rollTalentsQs(talent,player);
    let message = new ChatMessage(player.playerPersonaldata.Name+" "+player.playerPersonaldata.Lastname,"Du hast "+ talentRoll + " QS bei deiner Probe auf "+talent.name+" bekommen.")
    this.sendChatMessage(message);
  }
  randomBetween(min: number, max: number):number {
    return Math.round(Math.random() * (max - min)+ min);
  }
  rollTalentsQs(talent: Faehigkeiten, player: Player): number{
    let drueber: number = 0;
    let qs: number = 0;
    if(talent.Fw){
      for(let i = 0; i < 3; i++){
        let stat: string = talent.Eg[i];
        let wuerf: number = this.randomBetween(1,20);
        switch (stat) {
          case "MU":
            if(player.playerstats.MU < wuerf){
              drueber = drueber + (wuerf - player.playerstats.MU)
            }
            break
          case "KL":
            if(player.playerstats.KL < wuerf){
              drueber = drueber + (wuerf - player.playerstats.KL)
            }
            break
          case "IN":
            if(player.playerstats.IN < wuerf){
              drueber = drueber + (wuerf-player.playerstats.IN)
            }
            break
          case "CH":
            if(player.playerstats.CH < wuerf){
              drueber = drueber + (wuerf-player.playerstats.CH)
            }
            break
          case "FF":
            if(player.playerstats.FF < wuerf){
              drueber = drueber + (wuerf-player.playerstats.FF)
            }
            break
          case "GE":
            if(player.playerstats.GE > wuerf){
              drueber = drueber + (wuerf-player.playerstats.GE)
            }
            break
          case "KO":
            if(player.playerstats.KO < wuerf){
              drueber = drueber + (wuerf-player.playerstats.KO)
            }
            break
          case "KK":
            if(player.playerstats.KK < wuerf){
              drueber = drueber + (wuerf-player.playerstats.KK)
            }
            break
        }
      }
      let lol: number = talent.Fw - drueber;
      console.log(lol)
      if(lol < 0){
        qs = 0;
      } else if (lol <= 3) {
        qs = 1;
      } else if (lol <= 6) {
        qs = 2;
      } else if (lol <= 9) {
        qs = 3;
      } else if (lol <= 12) {
        qs = 4;
      } else if (lol <= 15) {
        qs = 5;
      } else {
        qs = 6;
      }
    }
    return qs;
  }

}
