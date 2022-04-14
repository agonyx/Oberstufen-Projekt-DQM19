import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-talents',
  templateUrl: './player-talents.component.html',
  styleUrls: ['./player-talents.component.css']
})
export class PlayerTalentsComponent implements OnInit {
  @Input() player?: Player;
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPlayer();
  }
  getPlayer(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.player = this.playerService.getPlayer(id);
  }

}
