import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {
  @Input() player?: Player;
  constructor(private  playerService: PlayerService, private route: ActivatedRoute) {
  }

  ngOnInit() {
  this.getHero();
  }
  getHero(): void {
   let id = Number(this.route.snapshot.paramMap.get('id'));
   console.log(id);
   this.player = this.playerService.getPlayer(id);
   console.log(this.player)
  }

}
