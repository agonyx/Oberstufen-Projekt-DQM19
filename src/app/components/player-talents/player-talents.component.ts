import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Faehigkeiten} from "../../models/fertigkeiten";
//TODO unterpunkt adden


@Component({
  selector: 'app-player-talents',
  templateUrl: './player-talents.component.html',
  styleUrls: ['./player-talents.component.css']
})
export class PlayerTalentsComponent implements OnInit {
  @Input() player?: Player;
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //Ruft Spieler per Url id ab
    let id = 0;
    if(this.route.parent){
      id = Number(this.route.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
  }



}
