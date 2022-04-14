import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";

@Component({
  selector: 'app-work-talents',
  templateUrl: './work-talents.component.html',
  styleUrls: ['./work-talents.component.css']
})
export class WorkTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() workTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
    this.workTalents = this.playerService.getTalents(this.player, "w");
  }
}
