import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player";

@Component({
  selector: 'app-player-select',
  templateUrl: './player-select.component.html',
  styleUrls: ['./player-select.component.css']
})
export class PlayerSelectComponent implements OnInit {
  players: Player[] = [];
  constructor(private playerService: PlayerService) { }
  // Holt alle Spieler aus dem playerService
  getOsverebalPlayers(): void{
    this.playerService.getObservabalPlayers().subscribe(players=>this.players=players)
  }

  ngOnInit(): void {
    this.getOsverebalPlayers();
  }

}
