import { Injectable } from '@angular/core';
import {PlayerService} from "./player.service";
import {Player} from "../models/player";
import {Inventory} from "../models/inventory";
import {Nahkampfwaffen} from "../models/nahkampfwaffen";
import {KampfserviceService} from "./kampfservice.service";
import {Fernkampfwaffen} from "../models/fernkampfwaffen";
import {Ruestung} from "../models/ruestung";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor() {
    //Nahkampfwaffen
    const magierstab: Nahkampfwaffen = new Nahkampfwaffen("NW-1","Magierstab","Stabwaffen", "GE/KK",
      16,"1W6+2",-1,2);
    const dolch: Nahkampfwaffen = new Nahkampfwaffen("NW-2","Dolch","Dolche", "GE",
      14,"1W6+1",0,0);
    const axtmitrunen: Nahkampfwaffen = new Nahkampfwaffen("NW-3","Axt mit Runen","Hiebwaffen", "KK",
      14,"1W6+9",-1,-2);
    //Fernkampfwaffen
    const langbogen: Fernkampfwaffen = new Fernkampfwaffen("FW-1","Langbogen","Bögen", 2,"1W6+8","Pfeile","20/100/160",4,0.75)
    //Rüstung
    const lederharnisch: Ruestung = new Ruestung("R-1","Lederharnisch", 3,0,6);
    const plattenruestung: Ruestung = new Ruestung("R-2","Plattenrüstung", 6,2,25);

    //Inventare
    const inv1: Inventory = new Inventory();
    inv1.addNW(magierstab);
    inv1.addFW(langbogen);
    inv1.addRuestung(plattenruestung);

  }
  getInventory(playerid: number) {

    return
  }
  getItem(itemType: string,itemID: string) {
    if(itemType == "NW"){
      
    } else if (itemType == "FW"){

    } else if (itemType == "R"){

    } else if (itemType == "PW") {

    } else {
      console.error("itemType nonexistent")
    }
  }

}
