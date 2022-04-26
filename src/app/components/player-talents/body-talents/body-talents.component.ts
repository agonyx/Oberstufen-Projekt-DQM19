import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../../models/player";
import {FertigkeitenService} from "../../../services/fertigkeiten.service";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {ChatroomComponent} from "../../chat/chatroom/chatroom.component";
import {ChatService} from "../../../services/chat.service";

@Component({
  selector: 'app-body-talents',
  templateUrl: './body-talents.component.html',
  styleUrls: ['./body-talents.component.css']
})
export class BodyTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() bodyTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    this.bodyTalents = this.playerService.getTalents(this.player, "b");
  }
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }
}
