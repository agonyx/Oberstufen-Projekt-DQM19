import { Injectable } from '@angular/core';
import {Player} from "../models/player";
import {Spezies} from "../models/Spezies";
import {stats} from "../models/player-attributs/stats";
import {Personaldata} from "../models/player-attributs/personaldata";
import {Base} from "../models/player-attributs/base";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  constructor() {
    this.creatData();
  }
  getPlayer(id: number): Player {
    return this.players[id];
  }
  creatData() {

    let human: Spezies = new Spezies(0, 5, -5, -5, 8);
    let player1Stats: stats = new stats(12, 14, 14, 13, 12, 12, 13, 11);
    let player1PersonalData: Personaldata = new Personaldata("Jendar", "Korninger");
    let player1BaseStats: Base = this.calcPlayerBaseStats(human, player1Stats);
    let player1: Player = new Player(0,1000, human, player1Stats, player1PersonalData, player1BaseStats, 3, 0)
    this.players.push(player1);
  }
  calcPlayerBaseStats(spezies: Spezies, pStats: stats) {
    //pbs = playerBaseStats
    let pbs: Base = new Base(
      spezies.LepSpezies + pStats.KO+pStats.KO,
      0,
      0,
      spezies.SKSpezies + ((pStats.MU+pStats.KL+pStats.IN)/6),
      spezies.ZKSpezies + ((pStats.KO+pStats.KO+pStats.KK)/6),
      pStats.GE/2,
      (pStats.MU+pStats.GE)/2,
      spezies.GesSpezies
    );
    if(pStats.KL >= 12){
      pbs.Asp = 20 + pStats.KL;
    }
    if(pStats.IN >= 12){
      pbs.Kap = 20 + pStats.IN;
    }
    return pbs;
  }
}
