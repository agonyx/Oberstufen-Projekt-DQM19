import {Component, Input, OnInit} from '@angular/core';
import {Kampftechniken} from "../../models/kampftechniken";
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-battletechniques',
  templateUrl: './player-battletechniques.component.html',
  styleUrls: ['./player-battletechniques.component.css']
})
export class PlayerBattletechniquesComponent implements OnInit {
  //TODO HTML ZUM FUNKTIONIEREN BRINGEN

  @Input() player?: Player;
  @Input() kampftechniken?: Kampftechniken[];
  constructor(private playerService: PlayerService, public  route: ActivatedRoute) {

	  }

  ngOnInit(): void {
    //Ruft Spieler per Url id ab
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    if(this.player.kampftechniken != undefined) {
      console.log("HEUREKA")
      this.kampftechniken = this.player.kampftechniken;
    }
  }

}
