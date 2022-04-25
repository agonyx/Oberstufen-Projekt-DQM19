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
  @Input() player?: Player;
  @Input() kampftechniken?: Kampftechniken[];
  constructor(public playerService: PlayerService, public  route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);

  }

}

