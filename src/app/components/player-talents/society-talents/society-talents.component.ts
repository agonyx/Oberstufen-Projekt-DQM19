import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {FertigkeitenService} from "../../../services/fertigkeiten.service";

@Component({
  selector: 'app-society-talents',
  templateUrl: './society-talents.component.html',
  styleUrls: ['./society-talents.component.css']
})
export class SocietyTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() societyTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    this.societyTalents = this.playerService.getTalents(this.player, "s");
  }
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }


}
