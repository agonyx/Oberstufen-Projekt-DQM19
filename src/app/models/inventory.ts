import {Nahkampfwaffen} from "./nahkampfwaffen";
import {Fernkampfwaffen} from "./fernkampfwaffen";
import {Ruestung} from "./ruestung";
import {Parrierwaffen} from "./parrierwaffen";

export class Inventory{
  private readonly _nw: Nahkampfwaffen[];
  private readonly _fw: Fernkampfwaffen[];
  private readonly _ruestung: Ruestung[];
  private readonly _parrierwaffen: Parrierwaffen[];
  constructor() {
  this._nw = [];
  this._fw = [];
  this._ruestung = [];
  this._parrierwaffen = [];
  }
  addNW(nwa: Nahkampfwaffen){
    this._nw!.push(nwa);
  }
  addFW(fwa: Fernkampfwaffen){
    this._fw!.push(fwa);
  }
  addRuestung(ru: Ruestung){
    this._ruestung!.push(ru);
  }
  addPW(pwa: Parrierwaffen){
    this._parrierwaffen!.push(pwa);
  }

  get nw(): Nahkampfwaffen[] {
    return this._nw;
  }

  get fw(): Fernkampfwaffen[] {
    return this._fw;
  }

  get ruestung(): Ruestung[] {
    return this._ruestung;
  }

  get parrierwaffen(): Parrierwaffen[] {
    return this._parrierwaffen;
  }
}
