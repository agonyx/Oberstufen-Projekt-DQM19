import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {Language} from "../../models/language";
import {writing} from "../../models/writing";


@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {
  @Input() player?: Player;
  playerServicen: PlayerService;
  constructor(private  playerService: PlayerService) {
    this.playerServicen = playerService;
  }

  ngOnInit() {
  this.player = this.playerService.getPlayerPerID();
  }


}
