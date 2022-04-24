import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-knowledge-talents',
  templateUrl: './knowledge-talents.component.html',
  styleUrls: ['./knowledge-talents.component.css']
})
export class KnowledgeTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() knowledgeTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    this.knowledgeTalents = this.playerService.getTalents(this.player, "k");
  }
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }

}
