import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";
import {ActivatedRoute} from "@angular/router";
import {FertigkeitenService} from "../../../services/fertigkeiten.service";

@Component({
  selector: 'app-society-talents',
  templateUrl: './society-talents.component.html',
  styleUrls: ['./society-talents.component.css']
})
export class SocietyTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() societyTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
    this.societyTalents = this.playerService.getTalents(this.player, "s");
  }


}
