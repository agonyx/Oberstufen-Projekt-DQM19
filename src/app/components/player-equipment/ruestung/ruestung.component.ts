import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Nahkampfwaffen} from "../../../models/nahkampfwaffen";
import {Ruestung} from "../../../models/ruestung";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ruestung',
  templateUrl: './ruestung.component.html',
  styleUrls: ['./ruestung.component.css']
})
export class RuestungComponent implements OnInit {
  @Input() player?: Player;
  @Input() ruestung?: Ruestung[] ;
  constructor(public playerService: PlayerService, public  route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);

    this.ruestung = this.player.inventar.ruestung;
  }

}
