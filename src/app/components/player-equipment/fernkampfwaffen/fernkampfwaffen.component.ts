import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Fernkampfwaffen} from "../../../models/fernkampfwaffen";

@Component({
  selector: 'app-fernkampfwaffen',
  templateUrl: './fernkampfwaffen.component.html',
  styleUrls: ['./fernkampfwaffen.component.css']
})
export class FernkampfwaffenComponent implements OnInit {
  @Input() player?: Player;
  @Input() fw?: Fernkampfwaffen[] ;
  constructor(private playerService: PlayerService, public  route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);
    console.log(this.player.inventar)
    this.fw = this.player.inventar.fw;
  }

}
