import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../models/player";
import {advantages} from "../../models/player-attributs/advantages";

@Component({
  selector: 'app-disadvantages-describtion',
  templateUrl: './disadvantages-describtion.component.html',
  styleUrls: ['./disadvantages-describtion.component.css']
})
export class DisadvantagesDescribtionComponent implements OnInit {
  @Input() player?: Player;
  @Input() disadvantage?: advantages;
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let playerID = 0;
    if(this.route.parent){
      playerID = Number(this.route.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(playerID);
    //Updated die Nachteile, wenn es eine Url Änderung gab
    this.route.params.subscribe((params: any) => {
      let disadvantageID: string = String(this.route.snapshot.paramMap.get('name'));
      if(this.player){
        this.player.nachteile.forEach(nachteil => {
          if (nachteil.name === disadvantageID){
            this.disadvantage = nachteil;
          }
        });
      }
    });

  }


}
