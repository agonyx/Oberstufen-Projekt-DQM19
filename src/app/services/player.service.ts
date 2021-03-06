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
import {Language} from "../models/language";
import {writing} from "../models/writing";
import {advantages} from "../models/player-attributs/advantages";
import {ChatService} from "./chat.service";
import {Observable, of} from "rxjs";
import {Fernkampfwaffen} from "../models/fernkampfwaffen";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  players: Player[] = [];
  constructor(private fertigkeitenService: FertigkeitenService, private route: ActivatedRoute, public chatService: ChatService, private ks: KampfserviceService, private invservice: InventoryService) {
    this.createData();
  }
  // Gibt alle Spieler als Observabels wieder
  getObservabalPlayers():  Observable<Player[]>{
    let players = of(this.players)
    return players;
  }
  // Gibt den Spieler mit der ├╝bergebenen id wieder.
  getPlayer(id: number): Player {
    return this.players[id];
  }
  // Generiert Spieldaten
  createData() {
	// Generelle Spielwerte

    let human: Spezies = new Spezies("Human",0, 5, -5, -5, 8);
    let vorteile: advantages[] = this.creatVorteile();
    let nachteile: advantages[] = this.creatNachteile();
    let languages: Language[] = this.creatLanguages();
    let writings: writing[] = this.creatWriting();
    //Player 1 (Jendar Korninger) create
    let player1Stats: stats = new stats(12, 14, 14, 13, 12, 12, 12, 11);
    let player1PersonalData: Personaldata = new Personaldata("Jendar", "Korninger");
    let player1VorteileString: string[][] = [["Zauberer"],["I"]];
    let player1NachteileString: string[][] = [["Angst"],["III"]];
    let player1LanguagesString: string[][] = [["Garethi","Bosperano","Thorwahlsch"],["MS","III","II"]];
    let player1WritingString: string[] = ["Kusliker Zeichen"];
    let FWs1: number[] = [0,0,4,3,0,7,4,4,0,4,7,0,0,0,7,2,4,7,0,5,5,0,4,0,0,0,3,7,4,0,0,3,4,4,3,8,0,12,3,5,3,0,12,0,0,10,4,0,0,4,1,0,0,11,1,0,0,0,1];
    let inv1: Inventory = new Inventory();
    let player1Vorteile: advantages[] = this.creatPlayerVorteile(vorteile, player1VorteileString);
    let player1Nachteile: advantages[] = this.creatPlayerNachteil(nachteile, player1NachteileString);
    let player1Base: Base = new Base(0,0,0,0,0,0,0,0);
    let player1Talents: PlayerTalents[] = this.creatPlayerTalents(FWs1, this.fertigkeitenService.fertigkeiten);
    let player1Languages: Language[] = this.creatPlayerLanguages(languages,player1LanguagesString)
    let player1writing: writing[] = this.creatPlayerWritings(writings,player1WritingString)
    let player1: Player = new Player(0,1000, 0, human, player1Stats, player1PersonalData, player1Base, 3, 0, player1Talents, inv1, player1Languages, player1writing, player1Vorteile, player1Nachteile,0,0,0,0,0,0)
    let player1BaseStats: Base = this.calcPlayerBaseStats(player1);
    player1.basestats = player1BaseStats;
    let kf1: Kampftechniken[] = this.calcKampftechniken(player1);
    player1.kampftechniken = kf1;
    player1.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-1"));
    player1.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-3"));
    player1.inventar.addFW(<Fernkampfwaffen>this.invservice.getItem("FW","FW-1"));
    player1.inventar.addRuestung(<Ruestung>this.invservice.getItem("R","R-2"));
	let Apa1: number = this.ApRechner(player1, this.fertigkeitenService.fertigkeiten);
    player1.Apa = Apa1;
    this.players.push(player1);
    //Player 2 (Schmit Ranok) create
    let player2Stats: stats = new stats(13, 12, 11, 12, 14, 10, 14, 14);
    let player2PersonalData: Personaldata = new Personaldata("Schmit", "Ranok", "Burgfalkenfels", "23. Boron. 1026",18,"m├Ąnnlich",190,86,"Schwarz","Gr├╝n","Frei","");
    let player2VorteileString: string[][] = [["Hohe-Lebenskraft","Wohlklang"],["V","I"]];
    let player2NachteileString: string[][] = [["J├Ąhzorn","Blutrausch"],["I","I"]];
    let player2LanguagesString: string[][] = [["Garethi","Tulamidya","Thorwahlsch"],["MS","II","I"]];
    let player2WritingString: string[] = ["Kusliker Zeichen"];
    let FWs2: number[] = [0,0,5,7,10,5,0,5,6,4,5,0,3,10,7,7,10,0,0,3,4,0,5,0,0,0,0,1,3,2,2,2,3,4,0,1,0,7,4,6,7,0,4,0,7,10,0,0,0,2,4,0,4,0,12,0,0,4,2];
    let inv2: Inventory = new Inventory();
    let player2Vorteile: advantages[] = this.creatPlayerVorteile(vorteile, player2VorteileString);
    let player2Nachteile: advantages[] = this.creatPlayerNachteil(nachteile, player2NachteileString);
    let player2Base: Base = new Base(0,0,0,0,0,0,0,0);
    let player2Talents: PlayerTalents[] = this.creatPlayerTalents(FWs2, this.fertigkeitenService.fertigkeiten);
    let player2Languages: Language[] = this.creatPlayerLanguages(languages,player2LanguagesString)
    let player2Writing: writing[] = this.creatPlayerWritings(writings,player2WritingString)
    let player2: Player = new Player(1,1288, 0, human, player2Stats, player2PersonalData, player2Base, 3, 0, player2Talents, inv2,player2Languages, player2Writing, player2Vorteile, player2Nachteile,12,0,0,0,0,0)
    let player2BaseStats: Base = this.calcPlayerBaseStats(player2);
    player2.basestats = player2BaseStats;
    let kf2: Kampftechniken[] = this.calcKampftechniken(player2);
    player2.kampftechniken = kf2;
    player2.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-1"));
    player2.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-3"));
    player2.inventar.addFW(<Fernkampfwaffen>this.invservice.getItem("FW","FW-1"));
    player2.inventar.addRuestung(<Ruestung>this.invservice.getItem("R","R-2"));
    let Apa2: number = this.ApRechner(player2, this.fertigkeitenService.fertigkeiten);
    player2.Apa = Apa2;
    this.players.push(player2);
    //Player 3 (Vero Lurana) create
    let player3Stats: stats = new stats(12, 11, 14, 10, 14, 13, 12, 14);
    let player3PersonalData: Personaldata = new Personaldata("Vero", "Lurana", "Burgfalkenfels", "9. Phex. 1024",20,"m├Ąnnlich",178,70,"Schwarz","Braun","Frei","");
    let player3VorteileString: string[][] = [["Entfernungssinn","Flink"],["I","I"]];
    let player3NachteileString: string[][] = [["Niedrige-Lebenskraft", "Verfr├╝hter-H├Âhepunkt"],["I","I"]];
    let player3LanguagesString: string[][] = [["Garethi","Thorwahlsch","Tulamidya"],["MS","II","I"]];
    let player3WritingString: string[] = [];
    let FWs3: number[] = [0,0,11,9,6,6,4,3,0,10,0,0,11,4,0,5,4,0,3,0,0,5,2,12,7,0,10,6,10,7,3,1,0,3,0,1,0,2,0,4,0,0,4,0,0,3,0,0,0,2,4,1,8,0,1,0,0,0,4];
    let inv3: Inventory = new Inventory();
    let player3Vorteile: advantages[] = this.creatPlayerVorteile(vorteile, player3VorteileString);
    let player3Nachteile: advantages[] = this.creatPlayerNachteil(nachteile, player3NachteileString);
    let player3Base: Base = new Base(0,0,0,0,0,0,0,0);
    let player3Talents: PlayerTalents[] = this.creatPlayerTalents(FWs3, this.fertigkeitenService.fertigkeiten);
    let player3Languages: Language[] = this.creatPlayerLanguages(languages,player3LanguagesString)
    let player3Writing: writing[] = this.creatPlayerWritings(writings,player3WritingString)
    let player3: Player = new Player(2,1288, 0, human, player3Stats, player3PersonalData, player3Base, 3, 0, player3Talents, inv3, player3Languages, player3Writing, player3Vorteile, player3Nachteile,0,0,0,0,0,0)
    let player3BaseStats: Base = this.calcPlayerBaseStats(player3);
    player3.basestats = player3BaseStats;
    let kf3: Kampftechniken[] = this.calcKampftechniken(player3);
    player3.kampftechniken = kf3;
    player3.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-1"));
    player3.inventar.addNW(<Nahkampfwaffen>this.invservice.getItem("NW", "NW-3"));
    player3.inventar.addFW(<Fernkampfwaffen>this.invservice.getItem("FW","FW-1"));
    player3.inventar.addRuestung(<Ruestung>this.invservice.getItem("R","R-2"));
    let Apa3: number = this.ApRechner(player3, this.fertigkeitenService.fertigkeiten);
    player3.Apa = Apa3;
    this.players.push(player3);

  }

  getPlayerInventory(playerid: number){
    for(let i of this.players) {
      if(i.id == playerid) {
        return i
      }
    }
    throw Error("Player Inventory couldn't be found!")
  }
  calcKampftechniken(p: Player): Kampftechniken[]{
    // GE/KK Leiteigenschaft Probleml├Âsung
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

    let kst: Kampftechniken[] = this.ks.kt;



    for(let e of kst) {
      e.ktw = 6;
      if (e.ktwextragekoppt != undefined){
        e.ktw += (e.ktwextragekoppt*map.get(e.sf));
      }
      e.ATFK = e.ktw! + (p.playerstats.MU-8) /3;
      e.ATFK = Math.round(e.ATFK);
      e.PA = Math.ceil(e.ktw!/2) + ((map.get(e.leiteigenschaft) -8)/ 3);
      e.PA = Math.round(e.PA);
    }
    return kst;
  }

  getKampftechnik(p: Player, kampftechnik: string){
      for(let i of p.kampftechniken!){
        if(i.kampftechniken.match(kampftechnik)){
          return i;
        }
      }
      throw Error;
  }

// Errechnet die Basiswerte eines Spielers (Lep, Asp, ...)
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
      if(element.name === "Hohe-Lebenskraft"){
        pbs.Lepmax = pbs.Lepmax + element.stufe;
      }
      if(element.name === "flink"){
        pbs.Ges = pbs.Ges + element.stufe;
      }
    })
    player.nachteile.forEach(element => {
      if(element.name === "Niedrige-Lebenskraft"){
        pbs.Lepmax = pbs.Lepmax - element.stufe;
      }
    })
    pbs.Lepmax = pbs.Lepmax + player.LepBought;
    pbs.AspMax = pbs.AspMax + player.AspBought;
    pbs.KapMax = pbs.KapMax + player.KapBought;
    return pbs;
  }
  // Erstellt alle Sprachen die es gibt
  creatLanguages(): Language[]{
    let languages: Language[]= []
    let garethi: Language = new Language("Garethi",0,false);
    let bosperano: Language = new Language("Bosperano",0,false);
    let thorwahlsch: Language = new Language("Thorwahlsch",0,false);
    let tulamidya: Language = new Language("Tulamidya",0,false)
    languages.push(garethi);
    languages.push(bosperano);
    languages.push(tulamidya);
    languages.push(thorwahlsch);
    return languages;
  }
  // Erstellt alle Schrieften die es gibt
  creatWriting(): writing[]{
    let writings: writing[] = [];
    let KuslikerZeichen: writing = new  writing(2,"Kusliker Zeichen");
    writings.push(KuslikerZeichen);
    return writings;
  }
  // Erstellt alle Vorteile die es gibt
  creatVorteile(): advantages[]{
    let vorteile: advantages[] = [];
    let zauberer: advantages = new advantages("Vorteil", 25, "Zauberer", "Der Zauberer erh├Ąlt als Astralenergie- Grundwert 20 AsP. Der Vorteil beinhaltet nicht die Sonderfertigkeit Tradition (siehe Regelwerk Seite 275). Diese muss einzeln erworben werden. Jeder Zauberer muss mit einer Tradition starten (eine Tradition ist eine spezielle Sonderfertigkeit). Dieser Vorteil l├Ąsst sich im sp├Ąteren Spielverlauf nicht mehr erwerben.", [],1)
    vorteile.push(zauberer);
    let hoheLebenskraft: advantages = new advantages("Vorteil", 6, "Hohe-Lebenskraft", "Der LE-Grundwert steigt durch diesen Vorteil um 1 Punkt pro Stufe des Vorteils.", ["Kein Nachteil Niedrige Lebenskraft "],1)
    vorteile.push(hoheLebenskraft);
    let wohlklang: advantages = new advantages("Vorteil", 5, "Wohlklang", "Fertigkeitsproben auf Singen sind um 1 erleichtert.", ["Kein Nachteil Stumm"],1)
    vorteile.push(wohlklang);
    let entfernungssinn: advantages = new advantages("Vorteil", 10, "Entfernungssinn", "Proben auf Fernkampf mit Schusswaffen (und nur mit Schusswaffen) sind bei der Entfernungskategorie Weit nur um 1 anstatt um 2 erschwert.", ["Kein Nachteil Blind","Eingeschr├Ąnkter Sinn (Sicht)","Farbenblind","Verst├╝mmelt (Ein├Ąugig) "],1)
    vorteile.push(entfernungssinn);
    let flink: advantages = new advantages("Vorteil", 8, "Flink", "Durch Flink bekommt ein Held 1 Punkt auf seinen Geschwindigkeit-Grundwert hinzu.", ["Kein Nachteil Beh├Ąbig","Fettleibig","Verst├╝mmelt (Einbeinig)"],1)
    vorteile.push(flink);
    return vorteile;
  }
  //Erstellt die Vorteile f├╝r die einzelnen Spieler, je nach angabe in der Charakter Erstellung
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
  // Erstellt alle Nachteile die es gibt
  creatNachteile(): advantages[]{
    let nachteile: advantages[] = [];
    let Angst: advantages = new advantages("Nachteil", -5, "Angst", "Bla blub", ["Fear"],1)
    nachteile.push(Angst);
    //Schlechte Eigenschaft J├Ąhzorn
    let Jaehzorn: advantages = new advantages("Nachteil", -10, "J├Ąhzorn", "Der Held ist sehr reizbar und neigt zu Wutausbr├╝chen, die meist nur kurz anhalten, aber zu gewaltt├Ątigem Verhalten f├╝hren k├Ânnen.", [],1)
    nachteile.push(Jaehzorn);
    let Blutrausch: advantages = new advantages("Nachteil", -10, "Blutrausch", "Der Held erh├Ąlt unter speziellen Umst├Ąnden den Status Blutrausch. Der Blutrausch wird aktiviert, wenn der Held durch einen Angriff eine Stufe des Zustands Schmerz erleidet oder ihm seine Probe auf Willenskraft zur Aktivierung der Schlechten Eigenschaft J├Ąhzorn misslingt.", ["Schlechte Eigenschaft J├Ąhzorn","Kein Nachteil Angst vor Blut"],1)
    nachteile.push(Blutrausch);
    let niedrigeLebenskraft: advantages = new advantages("Nachteil", -4, "Niedrige-Lebenskraft", "Der LE-Grundwert sinkt durch diesen Nachteil um 1 Punkt pro Stufe des Nachteils.", ["Kein Vorteil Hohe Lebenskraft"],1)
    nachteile.push(niedrigeLebenskraft);
    let verfruehterHoehepunkt: advantages = new advantages("Nachteil", -8, "Verfr├╝hter-H├Âhepunkt", "Der Held bekommt seinen H├Âhepunkt bereits bei Erregung Stufe III. Erregung Stufe III wird bei ihm wie Erregung Stufe IV behandelt.", ["Kein Vorteil Ausdauernde/r Liebhaber/in"],1)
    nachteile.push(verfruehterHoehepunkt);
    return nachteile;
  }
  //Erstellt die Nachteile f├╝r die einzelnen Spieler, je nach angabe in der Charakter Erstellung
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
  //Erstellt die Sprachen f├╝r die einzelnen Spieler, je nach angabe in der Charakter Erstellung
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
  //Erstellt die Schrieften f├╝r die einzelnen Spieler, je nach angabe in der Charakter Erstellung
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
  // Gibt nur die F├Ąhigkeiten der angegebenen Kategory wieder
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
  // Errechnet die Verbleibenden Schicksalspunkte
  Schicksalspunkteverbleibend(id: number):number {
    let currentsp: number = this.getPlayer(id).spg - this.getPlayer(id).spa;
    return currentsp;
  }
  // Methode zum ├Ąndern der Schicksalspunkte menge
  SchicksalspunkteVeraendern(a: number, id:number) {
    let b: number = this.getPlayer(id).spa;
      this.getPlayer(id).spa = b + a;
    console.log(this.getPlayer(id).spa)
  }
  // F├╝hrt die rollTalents Methode aus dem chat Service aus
  diceRoll(talent: Faehigkeiten, player: Player) {
      this.chatService.rollTalents(talent, player)
  }
  // Errechnet die Abenteuerpunkte aus allen Faktoren
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
    Apa += player.LepBought * 4;
    Apa += player.AspBought * 4;
    Apa += player.KapBought * 4;
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
  // Erstellt die Talente f├╝r die einzelnen Spieler, je nach angabe in der Charakter Erstellung
  creatPlayerTalents(Fw: number[], fertigkeiten: Faehigkeiten[]): PlayerTalents[]{
    let playerTalents: PlayerTalents[] = [];
    fertigkeiten.forEach((talent,index) => {
      let playertalent: PlayerTalents = new PlayerTalents(talent.shortTerm,Fw[index])
      playerTalents.push(playertalent)
    })
    return playerTalents;
  }
}
