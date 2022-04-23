import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";

@Component({
  selector: 'app-nature-talents',
  templateUrl: './nature-talents.component.html',
  styleUrls: ['./nature-talents.component.css']
})
export class NatureTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() natureTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
    this.natureTalents = this.playerService.getTalents(this.player, "n");
  }
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }

}
