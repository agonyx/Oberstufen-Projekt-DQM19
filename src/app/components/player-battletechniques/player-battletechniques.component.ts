import {Component, Input, OnInit} from '@angular/core';
import {Kampftechniken} from "../../models/kampftechniken";
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player";

@Component({
  selector: 'app-player-battletechniques',
  templateUrl: './player-battletechniques.component.html',
  styleUrls: ['./player-battletechniques.component.css']
})
export class PlayerBattletechniquesComponent implements OnInit {
  //TODO HTML ZUM FUNKTIONIEREN BRINGEN

  @Input() player?: Player;
  @Input() kampftechniken?: Kampftechniken[];
  constructor(public playerservice: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerservice.getPlayerPerID()
    if(this.player.kampftechniken != undefined) {
      console.log("HEUREKA")
      this.player.kampftechniken = this.kampftechniken;
    }


  }

}

