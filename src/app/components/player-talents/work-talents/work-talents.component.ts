import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-work-talents',
  templateUrl: './work-talents.component.html',
  styleUrls: ['./work-talents.component.css']
})
export class WorkTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() workTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    this.workTalents = this.playerService.getTalents(this.player, "w");
  }
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }
}
