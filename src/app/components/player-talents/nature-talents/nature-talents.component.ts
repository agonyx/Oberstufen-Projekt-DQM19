import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nature-talents',
  templateUrl: './nature-talents.component.html',
  styleUrls: ['./nature-talents.component.css']
})
export class NatureTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() natureTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Ruft Spieler per Url id ab
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    //Ruft talente der Nature Kategorie ab
    this.natureTalents = this.playerService.getTalents(this.player, "n");
  }
  //Fürht die Metohde diceRoll aus Player Service aus
  diceRoll(talent: Faehigkeiten) {
    if(this.player){
      this.playerService.diceRoll(talent,this.player)
    }
  }

}
