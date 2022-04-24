import {Nahkampfwaffen} from "./nahkampfwaffen";
import {Fernkampfwaffen} from "./fernkampfwaffen";
import {Ruestung} from "./ruestung";
import {Parrierwaffen} from "./parrierwaffen";

export class Inventory{
  constructor(public nw?: Nahkampfwaffen[], public fw?: Fernkampfwaffen[], public ruestung?: Ruestung[], public parrierwaffen?: Parrierwaffen[]) {
  }
  addNW(nwa: Nahkampfwaffen){
    this.nw!.push(nwa);
  }
  addFW(fwa: Fernkampfwaffen){
    this.fw!.push(fwa);
  }
  addRuestung(ru: Ruestung){
    this.ruestung!.push(ru);
  }
  addPW(pwa: Parrierwaffen){
    this.parrierwaffen!.push(pwa);
  }
}
