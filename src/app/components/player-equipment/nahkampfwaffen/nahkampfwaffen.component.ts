import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Fernkampfwaffen} from "../../../models/fernkampfwaffen";
import {Nahkampfwaffen} from "../../../models/nahkampfwaffen";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-nahkampfwaffen',
  templateUrl: './nahkampfwaffen.component.html',
  styleUrls: ['./nahkampfwaffen.component.css']
})
export class NahkampfwaffenComponent implements OnInit {
  @Input() player?: Player;
  @Input() nw?: Nahkampfwaffen[] ;
  constructor(public playerService: PlayerService, public  route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);

    this.nw = this.player.inventar.nw;
  }

}
