import { Injectable } from '@angular/core';
import {Player} from "../models/player";
import {Spezies} from "../models/Spezies";
import {stats} from "../models/player-attributs/stats";
import {Personaldata} from "../models/player-attributs/personaldata";
import {Base} from "../models/player-attributs/base";
import {PlayerTalents} from "../models/player-attributs/playerTalents";
import {FertigkeitenService} from "./fertigkeiten.service";
import {Faehigkeiten} from "../models/fertigkeiten";
import {ActivatedRoute} from "@angular/router";
import {Language} from "../models/language";
import {writing} from "../models/writing";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  constructor(private fertigkeitenService: FertigkeitenService, private route: ActivatedRoute) {
    this.creatData();
  }
  getPlayer(id: number): Player {
    return this.players[id];
  }
  getPlayerPerID(): Player {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    return this.getPlayer(id);
  }
  creatData() {

    let human: Spezies = new Spezies("Human",0, 5, -5, -5, 8);
    let player1Stats: stats = new stats(12, 14, 14, 13, 12, 12, 13, 11);
    let player1PersonalData: Personaldata = new Personaldata("Jendar", "Korninger");
    let player1BaseStats: Base = this.calcPlayerBaseStats(human, player1Stats);
    let player1Talents: PlayerTalents[] = this.creatPlayerTalents(this.fertigkeitenService.fertigkeiten);
    let player1Languages: Language[] = this.creatLanguages();
    let player1writing: writing[] = this.creatwriting();
    let player1: Player = new Player(0,1000, human, player1Stats, player1PersonalData, player1BaseStats, 3, 0, player1Talents, player1Languages, player1writing)
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
  creatLanguages(): Language[]{
    let languages: Language[]= []
    let Garethi: Language = new Language("Garethi",3,true);
    let Bosperano: Language = new Language("Bosperano",3,false);
    let Thorwahlsch: Language = new Language("Thorwahlsch",2,false);
    languages.push(Garethi);
    languages.push(Bosperano);
    languages.push(Thorwahlsch);
    return languages;
  }
  creatwriting(): writing[]{
    let writings: writing[] = [];
    let KuslikerZeichen: writing = new  writing(2,"Kusliker Zeichen");
    writings.push(KuslikerZeichen);
    return writings;
  }
  creatPlayerTalents(fertigkeiten: Faehigkeiten[]): PlayerTalents[]{
    let playerTalents: PlayerTalents[] = [];
    fertigkeiten.forEach(element => {
      let playerTalent: PlayerTalents = new PlayerTalents(element.shortTerm,0);
        playerTalents.push(playerTalent)
    })
    return playerTalents;
  }
  getTalents(player: Player, category: string): Faehigkeiten[] {
    let saveTalents: Faehigkeiten[] = [];
    this.fertigkeitenService.fertigkeiten.forEach(element => {
      player.talents.forEach(talent => {
        if(element.shortTerm == talent.shortTerm){
          element.Fw = talent.FW;
        }
      })
      let r = element.shortTerm.split("-", 1);
      if(r[0] === category) {
        saveTalents.push(element);
      }
    })
    return saveTalents;
  }
  Schicksalspunkteverbleibend():number {
    let currentsp: number = this.getPlayerPerID().spg - this.getPlayerPerID().spa;
    return currentsp;
  }
  SchicksalspunkteVeraendern(a: number) {
    let b: number = this.getPlayerPerID().spa;
      this.getPlayerPerID().spa = b + a;
    console.log(this.getPlayerPerID().spa)
  }
}
