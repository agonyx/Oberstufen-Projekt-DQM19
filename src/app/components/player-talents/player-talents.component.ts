import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
//TODO unterpunkt adden
@Component({
  selector: 'app-player-talents',
  templateUrl: './player-talents.component.html',
  styleUrls: ['./player-talents.component.css']
})
export class PlayerTalentsComponent implements OnInit {
  @Input() player?: Player;
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
  }


}
