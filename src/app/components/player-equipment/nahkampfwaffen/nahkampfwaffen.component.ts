import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Fernkampfwaffen} from "../../../models/fernkampfwaffen";
import {Nahkampfwaffen} from "../../../models/nahkampfwaffen";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {KampfserviceService} from "../../../services/kampfservice.service";

@Component({
  selector: 'app-nahkampfwaffen',
  templateUrl: './nahkampfwaffen.component.html',
  styleUrls: ['./nahkampfwaffen.component.css']
})
export class NahkampfwaffenComponent implements OnInit {
  @Input() player?: Player;
  @Input() nw?: Nahkampfwaffen[] ;
  constructor(public playerService: PlayerService, public  route: ActivatedRoute,public kampfservice:KampfserviceService) { }

  ngOnInit(): void {
    let id = 0;
    if(this.route.parent?.parent){
      id = Number(this.route.parent?.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(id);

    this.nw = this.player.inventar.nw;
    this.calcAT()
    this.calcPA()
  }

  calcAT(){
    if (this.nw){
    for(let t of this.nw){
      t.AT = this.playerService.getKampftechnik(this.player!,t.kampftechnik).getAT()! + t.AT_PAMOD1!;
    }
    }
  }
  calcPA(){
    if (this.nw){
      for(let t of this.nw){
        t.PA = this.playerService.getKampftechnik(this.player!,t.kampftechnik).getPA()! + t.AT_PAMOD2!;
      }
    }
  }
}
