import {Component, Input, OnInit} from '@angular/core';
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../../models/player";
import {FertigkeitenService} from "../../../services/fertigkeiten.service";
import {Faehigkeiten} from "../../../models/fertigkeiten";

@Component({
  selector: 'app-body-talents',
  templateUrl: './body-talents.component.html',
  styleUrls: ['./body-talents.component.css']
})
export class BodyTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() bodyTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
    this.bodyTalents = this.playerService.getTalents(this.player, "b");
  }

}
