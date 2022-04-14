import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() player?: Player;
  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  this.getPlayer();
  }
  getPlayer(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayer(id);
  }
}
