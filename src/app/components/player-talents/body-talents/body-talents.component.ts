import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../../models/player";

@Component({
  selector: 'app-body-talents',
  templateUrl: './body-talents.component.html',
  styleUrls: ['./body-talents.component.css']
})
export class BodyTalentsComponent implements OnInit {
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
