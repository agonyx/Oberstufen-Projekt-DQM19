import {Component, OnInit, VERSION} from '@angular/core';
import {Player} from "./models/player";
import {PlayerService} from "./services/player.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  public static initialload = true;

  players: Player[] = [];

  constructor(private playerService: PlayerService, private router: Router, private route: ActivatedRoute) {
  }

  // Holt alle Spieler aus dem playerService
  getOsverebalPlayers(): void {
    this.playerService.getObservabalPlayers().subscribe(players => this.players = players)
  }
  async gotoPlayer(id: number): Promise<void> {
    await this.router.navigate(['player', id], { relativeTo: this.route })
  }

  ngOnInit(): void {
    this.getOsverebalPlayers();
  }

}


