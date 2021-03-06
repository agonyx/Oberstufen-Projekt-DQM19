import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {Player} from "../../models/player";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  get players(): Player[]{
    return  this.playerService.players;
  }

  ngOnInit() {
  }

}
