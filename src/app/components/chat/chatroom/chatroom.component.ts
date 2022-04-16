import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../../../models/chat-message.model";
import {ChatService} from "../../../services/chat.service";
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  anzahlwuerfe = 0;
  wuerfelseiten = 0;
  wuerfelwunsch = false;


  constructor(private chat: ChatService) {
    //Test --- If message amount > 25 and everything works then fine
    AppComponent.initialload = true;
  }
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
}
