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
import {KampfserviceService} from "./kampfservice.service";
import {Kampftechniken} from "../models/kampftechniken";
import {Inventory} from "../models/inventory";
import {InventoryService} from "./inventory.service";
import {Nahkampfwaffen} from "../models/nahkampfwaffen";
import {Ruestung} from "../models/ruestung";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  constructor(private fertigkeitenService: FertigkeitenService, private route: ActivatedRoute,private ks: KampfserviceService, private invservice: InventoryService) {
    this.createData();
  }
  getPlayer(id: number): Player {
    return this.players[id];
  }
  getPlayerPerID(): Player {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    return this.getPlayer(id);
  }
  createData() {
    //TODO use getInventory Method
    let inv: Inventory = new Inventory();
    let human: Spezies = new Spezies("Human",0, 5, -5, -5, 8);
    let player1Stats: stats = new stats(12, 14, 14, 13, 12, 12, 13, 11);
    let player1PersonalData: Personaldata = new Personaldata("Jendar", "Korninger");
    let player1BaseStats: Base = this.calcPlayerBaseStats(human, player1Stats);
    let player1Talents: PlayerTalents[] = this.creatPlayerTalents(this.fertigkeitenService.fertigkeiten);
    let player1: Player = new Player(0,1000, human, player1Stats, player1PersonalData, player1BaseStats, 3, 0, player1Talents,inv)
    let kf: Kampftechniken[] = this.calcKampftechniken(player1);
    player1.kampftechniken = kf;
    //TODO
    player1.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-1"));
    player1.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-3"));
    player1.inventar.addRuestung(<Ruestung>this.invservice.getItem("R","R-2"));
    console.log(player1.inventar.ruestung![1])
    this.players.push(player1);

  } //TODO write Method getInventory

  getPlayerInventory(playerid: number){


  }
  calcKampftechniken(p: Player): Kampftechniken[]{
    // GE/KK Leiteigenschaft Problemlösung
    let biggah;
    if (p.playerstats.KK > p.playerstats.GE) {
      biggah = p.playerstats.KK;
    } else {
      biggah = p.playerstats.GE;
    }
    //Hashmap macht halt einfach alles einfacher
    let map = new Map()
      .set("A",1)
      .set("B",2)
      .set("C",3)
      .set("D",4)
      .set("FF", p.playerstats.FF)
      .set("GE", p.playerstats.GE)
      .set("KK", p.playerstats.KK)
      .set("GE/KK", biggah);

    let kst: Kampftechniken[] = this.ks.kf;


    for(let e of kst) {
      e.ktw = 6;
      if (e.ktwextragekoppt != undefined){
        e.ktw += (e.ktwextragekoppt*map.get(e.sf));
      }
      e.ATFK = e.ktw! + p.playerstats.MU;
      e.PA = Math.ceil(e.ktw!/2) + (map.get(e.leiteigenschaft) - 8 / 3);

    }
    return kst;
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
}
