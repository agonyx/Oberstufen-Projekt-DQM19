import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../models/player";
import {PlayerService} from "../../services/player.service";
import {Language} from "../../models/language";
import {writing} from "../../models/writing";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {
  @Input() player?: Player;
  playerServicen: PlayerService;
  constructor(private  playerService: PlayerService, private route:ActivatedRoute) {
    this.playerServicen = playerService;
  }

  ngOnInit() {
    let id = 0;
    if(this.route.parent){
      id = Number(this.route.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    console.log(this.player)
  }


}
