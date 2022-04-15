import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {Faehigkeiten} from "../../../models/fertigkeiten";
import {PlayerService} from "../../../services/player.service";

@Component({
  selector: 'app-knowledge-talents',
  templateUrl: './knowledge-talents.component.html',
  styleUrls: ['./knowledge-talents.component.css']
})
export class KnowledgeTalentsComponent implements OnInit {
  @Input() player?: Player;
  @Input() knowledgeTalents?: Faehigkeiten[];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.player = this.playerService.getPlayerPerID();
    this.knowledgeTalents = this.playerService.getTalents(this.player, "k");
  }

}
