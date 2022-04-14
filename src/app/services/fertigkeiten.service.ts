import { Injectable } from '@angular/core';
import {Faehigkeiten} from '../models/fertigkeiten';

@Injectable({
  providedIn: 'root'
})
export class FertigkeitenService {
  fertigkeiten: Faehigkeiten[] = [];
  constructor() {
    this.creatTalents();
  }
  getFertigkeit(id: number): Faehigkeiten{
    return this.fertigkeiten[id];
  }
  creatTalents() {
    let talents: Faehigkeiten[] = [];
    let talent1: Faehigkeiten = new Faehigkeiten("Fliegen", "MU", "IN","GE","B",0,"b-1")
    talents.push(talent1);
    let talent2: Faehigkeiten = new Faehigkeiten("Gaukeleien", "MU", "CH","FF","A",0,"b-2")
    talents.push(talent2);
    let talent3: Faehigkeiten = new Faehigkeiten("Klettern", "MU", "GE","KK","B",0,"b-3")
    talents.push(talent3);
    let talent4: Faehigkeiten = new Faehigkeiten("Betören", "MU", "CH","CH","B",0,"s-2")
    talents.push(talent4);
    this.fertigkeiten = talents;
  }

}
