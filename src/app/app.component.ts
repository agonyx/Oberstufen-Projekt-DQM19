import {Component, OnInit, VERSION} from '@angular/core';
import {Player} from "./models/player";
import {PlayerService} from "./services/player.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public static initialload = true;

  players: Player[] = [];

  constructor(private playerService: PlayerService) {
  }

  // Holt alle Spieler aus dem playerService
  getOsverebalPlayers(): void {
    this.playerService.getObservabalPlayers().subscribe(players => this.players = players)

  }

  ngOnInit(): void {
    this.getOsverebalPlayers();
  }

}


