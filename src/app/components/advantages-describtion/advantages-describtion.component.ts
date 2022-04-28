import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../models/player";
import {advantages} from "../../models/player-attributs/advantages";

@Component({
  selector: 'app-advantages-describtion',
  templateUrl: './advantages-describtion.component.html',
  styleUrls: ['./advantages-describtion.component.css']
})
export class AdvantagesDescribtionComponent implements OnInit {
  @Input() player?: Player;
  @Input() advantage?: advantages;
  constructor(private playerService: PlayerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let playerID = 0;
    if(this.route.parent?.parent){
      playerID = Number(this.route.parent.parent.snapshot.paramMap.get('id'));
    }
    this.player = this.playerService.getPlayer(playerID);
    //Updated die Vorteile, wenn es eine Url Änderung gab
    this.route.params.subscribe((params: any) => {
      let disadvantageID: string = String(this.route.snapshot.paramMap.get('name'));
      if(this.player){
        let advantageID: string = String(this.route.snapshot.paramMap.get('name'));
        this.player.vorteil.forEach(vorteil => {
          if (vorteil.name === advantageID){
            this.advantage = vorteil;
          }
        });
      }
    });

  }

}
