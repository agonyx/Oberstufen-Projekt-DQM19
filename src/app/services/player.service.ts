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
import {advantages} from "../models/player-attributs/advantages";
import {ChatService} from "./chat.service";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  constructor(private fertigkeitenService: FertigkeitenService, private route: ActivatedRoute, private chatService: ChatService) {
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

    // Generelle Spielwerte
    let human: Spezies = new Spezies("Human",0, 5, -5, -5, 8);
    let vorteile: advantages[] = this.creatVorteile();
    let nachteile: advantages[] = this.creatNachteile();
    let languages: Language[] = this.creatLanguages();
    let writings: writing[] = this.creatWriting();
    //PLayer 1 creat
    let player1Stats: stats = new stats(12, 14, 14, 13, 12, 12, 12, 11);
    let player1PersonalData: Personaldata = new Personaldata("Jendar", "Korninger");
    let player1VorteileString: string[][] = [["Zauberer"],["I"]];
    let player1NachteileString: string[][] = [[],[]];
    let player1LanguagesString: string[][] = [["Garethi","Bosperano","Thorwahlsch"],["MS","III","II"]];
    let player1WritingString: string[] = ["Kusliker Zeichen"];
    let player1Vorteile: advantages[] = this.creatPlayerVorteile(vorteile, player1VorteileString);
    let player1Nachteile: advantages[] = this.creatPlayerNachteil(nachteile, player1NachteileString);
    let player1Base: Base = new Base(0,0,0,0,0,0,0,0);
    let player1Talents: PlayerTalents[] = this.creatPlayerTalents(this.fertigkeitenService.fertigkeiten);
    let player1Languages: Language[] = this.creatPlayerLanguages(languages,player1LanguagesString)
    let player1writing: writing[] = this.creatPlayerWritings(writings,player1WritingString)
    let player1: Player = new Player(0,1000, 0, human, player1Stats, player1PersonalData, player1Base, 3, 0, player1Talents, player1Languages, player1writing, player1Vorteile, player1Nachteile,0,0,0,0,0,0)
    let player1BaseStats: Base = this.calcPlayerBaseStats(player1);
    player1.basestats = player1BaseStats;
    let Apa: number = this.ApRechner(player1, this.fertigkeitenService.fertigkeiten);
    player1.Apa = Apa;
    this.players.push(player1);
  }
  calcPlayerBaseStats(player: Player) {
    let pbs: Base = new Base(
      player.spezies.LepSpezies + player.playerstats.KO+player.playerstats.KO,
      0,
      0,
      Math.round(player.spezies.SKSpezies + ((player.playerstats.MU+player.playerstats.KL+player.playerstats.IN)/6)),
      Math.round(player.spezies.ZKSpezies + ((player.playerstats.KO+player.playerstats.KO+player.playerstats.KK)/6)),
      Math.round(player.playerstats.GE/2),
      Math.round((player.playerstats.MU+player.playerstats.GE)/2),
      player.spezies.GesSpezies
    );
    player.vorteil.forEach(element => {
      if(element.name === "Zauberer"){
        pbs.AspMax = 20 + player.playerstats.KL;
      } else if(element.name === "Geweihter") {
        pbs.KapMax = 20 + player.playerstats.IN;
      }
    })
    pbs.Lepmax = pbs.Lepmax + player.LepBouth;
    pbs.AspMax = pbs.AspMax + player.AspBouth;
    pbs.KapMax = pbs.KapMax + player.KapBouth;
    return pbs;
  }
  creatLanguages(): Language[]{
    let languages: Language[]= []
    let Garethi: Language = new Language("Garethi",0,false);
    let Bosperano: Language = new Language("Bosperano",0,false);
    let Thorwahlsch: Language = new Language("Thorwahlsch",0,false);
    languages.push(Garethi);
    languages.push(Bosperano);
    languages.push(Thorwahlsch);
    return languages;
  }
  creatWriting(): writing[]{
    let writings: writing[] = [];
    let KuslikerZeichen: writing = new  writing(2,"Kusliker Zeichen");
    writings.push(KuslikerZeichen);
    return writings;
  }
  creatVorteile(): advantages[]{
    let vorteile: advantages[] = [];
    let zauberer: advantages = new advantages("Vorteil", 25, "Zauberer", "Der Zauberer erhält als Astralenergie- Grundwert 20 AsP. Der Vorteil beinhaltet nicht die Sonderfertigkeit Tradition (siehe Regelwerk Seite 275). Diese muss einzeln erworben werden. Jeder Zauberer muss mit einer Tradition starten (eine Tradition ist eine spezielle Sonderfertigkeit). Dieser Vorteil lässt sich im späteren Spielverlauf nicht mehr erwerben.", [],1)
    vorteile.push(zauberer);
    return vorteile;
  }
  creatPlayerVorteile(vorteile: advantages[],playerVorteileString: string[][]): advantages[]{
    let playerVorteile: advantages[] = [];
    vorteile.forEach((vorteil) => {
      playerVorteileString[0].forEach((element,index) =>{
        if(element === vorteil.name){
          let subString: string = playerVorteileString[1][index];
          switch (subString){
            case "I":
              vorteil.stufe = 1;
              break;
            case "II":
              vorteil.stufe = 2;
              break;
            case "III":
              vorteil.stufe = 3;
              break;
            case "IV":
              vorteil.stufe = 4;
              break;
            case "V":
              vorteil.stufe = 5;
              break;
            case "VI":
              vorteil.stufe = 6;
              break;
            case "VII":
              vorteil.stufe = 7;
              break;
            default :
              break;
          }
          playerVorteile.push(vorteil);
        }
      })
    })
    return playerVorteile;
  }
  creatNachteile(): advantages[]{
    let nachteile: advantages[] = [];

    return nachteile;
  }
  creatPlayerNachteil(nachteile: advantages[],playerNachteileString: string[][]): advantages[]{
    let playerNachteile: advantages[] = [];
    nachteile.forEach((nachteil) => {
      playerNachteileString[0].forEach((element,index) =>{
        if(element === nachteil.name){
          let subString: string = playerNachteileString[1][index];
          switch (subString){
            case "I":
              nachteil.stufe = 1;
              break;
            case "II":
              nachteil.stufe = 2;
              break;
            case "III":
              nachteil.stufe = 3;
              break;
            case "IV":
              nachteil.stufe = 4;
              break;
            case "V":
              nachteil.stufe = 5;
              break;
            case "VI":
              nachteil.stufe = 6;
              break;
            case "VII":
              nachteil.stufe = 7;
              break;
            default :
              break;
          }
          playerNachteile.push(nachteil);
        }
      })
    })
    return playerNachteile;
  }
  creatPlayerLanguages(languages: Language[],playerLanguageString: string[][]): Language[]{
    let playerLanguage: Language[] = [];
    languages.forEach((language) => {
      playerLanguageString[0].forEach((element,index) =>{
        if(element === language.name){
          let subString: string = playerLanguageString[1][index];
          switch (subString){
            case "MS":
              language.MS = true;
              language.level = 3;
              break;
            case "I":
              language.level = 1;
              break;
            case "II":
              language.level = 2;
              break;
            case "III":
              language.level = 3;
              break;
            default :
              break;
          }
          playerLanguage.push(language);
        }
      })
    })
    return playerLanguage;
  }
  creatPlayerWritings(writings: writing[],playerWritingsString: string[]): writing[]{
    let playerWritings: writing[] = [];
    writings.forEach((writing) => {
      playerWritingsString.forEach((element) =>{
        if(element===writing.name){
          playerWritings.push(writing);
        }
      })
    })
    return playerWritings;
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
  diceRoll(talent: Faehigkeiten, player: Player) {
      this.chatService.rollTalents(talent, player)
  }
  ApRechner(player:Player, fertigkeiten: Faehigkeiten[]): number{
    let Apa: number = 0;
    Apa += player.spezies.APKosten;
    if(player.playerstats.MU <= 14){
      Apa += (player.playerstats.MU - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.MU-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.KL <= 14){
      Apa += (player.playerstats.KL - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.KL-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.IN <= 14){
      Apa += (player.playerstats.IN - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.IN-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.CH <= 14){
      Apa += (player.playerstats.CH - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.CH-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.FF <= 14){
      Apa += (player.playerstats.FF - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.FF-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.GE <= 14){
      Apa += (player.playerstats.GE - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.GE-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.KO <= 14){
      Apa += (player.playerstats.KO - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.KO-14; i++){
        Apa += 15*(i+2);
      };
    }
    if(player.playerstats.KK <= 14){
      Apa += (player.playerstats.KK - 8)*15;
    } else {
      Apa += ((14 - 8)*15)
      for(let i = 0; i < player.playerstats.KK-14; i++){
        Apa += 15*(i+2);
      };
    }
    player.vorteil.forEach(vorteil => {
      Apa += vorteil.APKosten * vorteil.stufe;
    })
    player.nachteile.forEach(nachteil => {
      Apa += nachteil.APKosten * nachteil.stufe;
    })
    Apa += player.LepBouth * 4;
    Apa += player.AspBouth * 4;
    Apa += player.KapBouth * 4;
    player.talents.forEach((talent,index) => {
      switch (fertigkeiten[index].Sf){
        case "A":
          Apa += talent.FW * 1;
          break;
        case "B":
          Apa += talent.FW * 2;
          break;
        case "C":
          Apa += talent.FW * 3;
          break;
        case "D":
          Apa += talent.FW * 4;
          break;
        case "E":
          Apa += talent.FW * 5;
          break;
        default:

          break;
      }
    })
    player.languages.forEach(langauge => {
      if(!langauge.MS){
        Apa += langauge.level * 2;
      }
    })
    player.writings.forEach(writing => {
      Apa += writing.ApKosten;
    })
    console.log(Apa)
    return Apa;
  }
}
