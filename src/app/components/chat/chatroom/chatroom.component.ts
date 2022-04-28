import {AppComponent} from "../../../app.component";
import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../../models/chat-message.model";
import {ChatService} from "../../../services/chat.service";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {Player} from "../../../models/player";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  anzahlwuerfe = 0;
  wuerfelseiten = 0;
  wuerfelwunsch = false;

  constructor(private chat: ChatService, private playerService: PlayerService, private route: ActivatedRoute) {
 //Test --- If message amount > 25 and everything works then fine
    AppComponent.initialload = true;
	}
  @Input() player?: Player;
  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayer(id);
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
  roll(anzahlwuerfe: number, wuerfelseiten:number, player?: Player){
    let string =""
    if(anzahlwuerfe != 0 && wuerfelseiten != 0) {
    for (let i = 0; i < anzahlwuerfe; i++){
      string += this.randomBetween(1,wuerfelseiten)+" "
    }
      if(player){
        let message = new ChatMessage(player?.playerPersonaldata.Name+" "+player?.playerPersonaldata.Lastname, "Ich habe "+ this.anzahlwuerfe +"w"+this.wuerfelseiten + " für dich geworfen! \n Ergebnisse: " + string );
        this.chat.sendChatMessage(message);
      } else {
        let message = new ChatMessage("Würfelbot", "Ich habe "+ this.anzahlwuerfe +"w"+this.wuerfelseiten + " für dich geworfen! \n Ergebnisse: " + string );
        this.chat.sendChatMessage(message);
      }
  } else {
      alert("Werte können nicht 0 sein!")
    }
  }

}
