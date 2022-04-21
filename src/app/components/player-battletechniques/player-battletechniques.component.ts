import {Component, Input, OnInit} from '@angular/core';
import {Kampftechniken} from "../../models/kampftechniken";

@Component({
  selector: 'app-player-battletechniques',
  templateUrl: './player-battletechniques.component.html',
  styleUrls: ['./player-battletechniques.component.css']
})
export class PlayerBattletechniquesComponent implements OnInit {
@Input() kampftechniken: Kampftechniken;
  constructor() { }

  ngOnInit(): void {
  }

}

