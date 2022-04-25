import { Injectable } from '@angular/core';
import {PlayerService} from "./player.service";
import {Player} from "../models/player";
import {Inventory} from "../models/inventory";
import {Nahkampfwaffen} from "../models/nahkampfwaffen";
import {Fernkampfwaffen} from "../models/fernkampfwaffen";
import {Ruestung} from "../models/ruestung";
import {Parrierwaffen} from "../models/parrierwaffen";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private nahkampfwaffen: Nahkampfwaffen[] = [];
  //Nahkampfwaffen
  private magierstab: Nahkampfwaffen = new Nahkampfwaffen("NW-1","Magierstab","Stabwaffen", "GE/KK",
    16,"1W6+2",-1,2);
  private dolch: Nahkampfwaffen = new Nahkampfwaffen("NW-2","Dolch","Dolche", "GE",
    14,"1W6+1",0,0);
  private axtmitrunen: Nahkampfwaffen = new Nahkampfwaffen("NW-3","Axt mit Runen","Hiebwaffen", "KK",
    14,"1W6+9",-1,-2);


  private fernkampfwaffen: Fernkampfwaffen[] = [];
  //Fernkampfwaffen
  private langbogen: Fernkampfwaffen = new Fernkampfwaffen("FW-1","Langbogen","Bögen", 2,"1W6+8","Pfeile","20/100/160",4,0.75)


  private ruestungen: Ruestung[] = [];
  //Rüstung
  private lederharnisch: Ruestung = new Ruestung("R-1","Lederharnisch", 3,0,6);
  private plattenruestung: Ruestung = new Ruestung("R-2","Plattenrüstung", 6,2,25);

  private parrierwaffen: Parrierwaffen[] =[];
  constructor() {
//Rüstung
    this.ruestungen.push(this.lederharnisch);
    this.ruestungen.push(this.plattenruestung);
//Nahkampfwaffen
    this.nahkampfwaffen.push(this.magierstab);
    this.nahkampfwaffen.push(this.dolch);
    this.nahkampfwaffen.push(this.axtmitrunen);
//Fernkampfwaffen
    this.fernkampfwaffen.push(this.langbogen);
    const inv1: Inventory = new Inventory();
    inv1.addNW(this.magierstab);
    inv1.addFW(this.langbogen);
    inv1.addRuestung(this.plattenruestung);

  }
  getInventory(playerid: number) {

    return
  }
  getItem(itemType: string,itemID: string) {
    if(itemType.match("NW")){
        for (let i of this.nahkampfwaffen) {
          if (i.id.match(itemID)) {
            return i;
          }
        }
      throw Error("Item couldn't be found!");
    } else if (itemType.match("FW")){
      for (let i of this.fernkampfwaffen){
        if(i.id.match(itemID)) {
          return i;
        }
      }
      throw Error("Item couldn't be found!");
    } else if (itemType.match("R")){
      for (let i of this.ruestungen){
        if(i.id.match(itemID)) {
          return i;
        }
      }
      throw Error("Item couldn't be found!");
    } else if (itemType.match("PW")) {
      for (let i of this.parrierwaffen){
        if(i.id.match(itemID)) {
          return i;
        }
      }
      throw Error("Item couldn't be found!");
    } else {
      throw Error("itemType nonexistent");
    }
  }

}
