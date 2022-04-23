import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../../models/chat-message.model";
import {ChatService} from "../../services/chat.service";
import {Faehigkeiten} from "../../models/fertigkeiten";
import {Player} from "../../models/player";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  anzahlwuerfe = 0;
  wuerfelseiten = 0;
  wuerfelwunsch = false;


  constructor(private chat: ChatService) { }

  ngOnInit(): void {
  }
switchWuerfelwunschState(){
    if(this.wuerfelwunsch) {
      this.wuerfelwunsch = false;
    }else if (!this.wuerfelwunsch){
      this.wuerfelwunsch = true;
    }
}

  randomBetween(min: number, max: number):number {
  return Math.round(Math.random() * (max - min)+ min);
}
  roll(anzahlwuerfe: number, wuerfelseiten:number){
    let string =""
    if(anzahlwuerfe != 0 && wuerfelseiten != 0) {


    for (let i = 0; i < anzahlwuerfe; i++){
      string += this.randomBetween(1,wuerfelseiten)+" "
    }

      let message = new ChatMessage("Würfelbot", "Ich habe "+ this.anzahlwuerfe +"w"+this.wuerfelseiten + " für dich geworfen! \n Ergebnisse: " + string );
      this.chat.sendChatMessage(message);
  } else {
      alert("Werte können nicht 0 sein!")
    }
  }
  rollTalents(talent: Faehigkeiten, player:Player){
    let message = new ChatMessage("Würfelbot","Du hast "+ this.rollTalentsQs(talent,player)+ " QS bei deiner Probe auf "+talent.name+" bekommen.")
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
            if(player.playerstats.MU > wuerf){
              drueber = drueber + (player.playerstats.MU - wuerf)
            }
            break
          case "KL":
            if(player.playerstats.KL > wuerf){
              drueber = drueber + (player.playerstats.KL - wuerf)
            }
            break
          case "IN":
            if(player.playerstats.IN > wuerf){
              drueber = drueber + (player.playerstats.IN - wuerf)
            }
            break
          case "CH":
            if(player.playerstats.CH > wuerf){
              drueber = drueber + (player.playerstats.CH - wuerf)
            }
            break
          case "FF":
            if(player.playerstats.FF > wuerf){
              drueber = drueber + (player.playerstats.FF - wuerf)
            }
            break
          case "GE":
            if(player.playerstats.GE > wuerf){
              drueber = drueber + (player.playerstats.GE - wuerf)
            }
            break
          case "KO":
            if(player.playerstats.KO > wuerf){
              drueber = drueber + (player.playerstats.KO - wuerf)
            }
            break
          case "KK":
            if(player.playerstats.KK > wuerf){
              drueber = drueber + (player.playerstats.KK - wuerf)
            }
            break
        }
      }
      let lol: number = talent.Fw + drueber;
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
