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
    let talentb1: Faehigkeiten = new Faehigkeiten("Fliegen", ["MU", "IN","GE"],"B","b-1")
    talents.push(talentb1);
    let talentb2: Faehigkeiten = new Faehigkeiten("Gaukeleien", ["MU", "CH","FF"],"A","b-2")
    talents.push(talentb2);
    let talentb3: Faehigkeiten = new Faehigkeiten("Klettern", ["MU", "GE","KK"],"B","b-3")
    talents.push(talentb3);
    let talentb4: Faehigkeiten = new Faehigkeiten("Körperbeherrschung", ["GE", "GE","KO"],"D","b-4")
    talents.push(talentb4);
    let talentb5: Faehigkeiten = new Faehigkeiten("Kraftakt", ["KO", "KK","KK"],"B","b-5")
    talents.push(talentb5);
    let talentb6: Faehigkeiten = new Faehigkeiten("Reiten", ["CH", "GE","KK"],"B","b-6")
    talents.push(talentb6);
    let talentb7: Faehigkeiten = new Faehigkeiten("Schwimmen", ["GE", "KO","KK"],"B","b-7")
    talents.push(talentb7);
    let talentb8: Faehigkeiten = new Faehigkeiten("Selbsbeherrschung", ["MU", "MU","KO"],"D","b-8")
    talents.push(talentb8);
    let talentb9: Faehigkeiten = new Faehigkeiten("Singen", ["KL", "CH","KO"],"A","b-9")
    talents.push(talentb9);
    let talentb10: Faehigkeiten = new Faehigkeiten("Sinnesschärfe", ["KL", "IN","IN"],"D","b-10")
    talents.push(talentb10);
    let talentb11: Faehigkeiten = new Faehigkeiten("Tanzen", ["KL", "CH","GE"],"A","b-11")
    talents.push(talentb11);
    let talentb12: Faehigkeiten = new Faehigkeiten("Taschendiebstahl", ["MU", "FF","GE"],"B","b-12")
    talents.push(talentb12);
    let talentb13: Faehigkeiten = new Faehigkeiten("Verbergen", ["MU", "IN","GE"],"C","b-13")
    talents.push(talentb13);
    let talentb14: Faehigkeiten = new Faehigkeiten("Zechen", ["KL", "KO","KK"],"A","b-14")
    talents.push(talentb14);
    let talents1: Faehigkeiten = new Faehigkeiten("Bekehren & Überzeugen", ["MU", "KL","CH"],"B","s-1")
    talents.push(talents1);
    let talents2: Faehigkeiten = new Faehigkeiten("Betören", ["MU", "CH","CH"],"B","s-2")
    talents.push(talents2);
    let talents3: Faehigkeiten = new Faehigkeiten("Einschüchtern", ["MU", "IN","CH"],"B","s-3")
    talents.push(talents3);
    let talents4: Faehigkeiten = new Faehigkeiten("Etikette", ["KL", "IN","CH"],"B","s-4")
    talents.push(talents4);
    let talents5: Faehigkeiten = new Faehigkeiten("Gassenwissen", ["KL", "IN","CH"],"C","s-5")
    talents.push(talents5);
    let talents6: Faehigkeiten = new Faehigkeiten("Menschenkenntnis", ["KL", "IN","CH"],"C","s-6")
    talents.push(talents6);
    let talents7: Faehigkeiten = new Faehigkeiten("Überreden", ["MU", "IN","CH"],"B","s-7")
    talents.push(talents7);
    let talents8: Faehigkeiten = new Faehigkeiten("Verkleiden", ["IN", "CH","GE"],"B","s-8")
    talents.push(talents8);
    let talents9: Faehigkeiten = new Faehigkeiten("Willenskraft", ["MU", "IN","CH"],"D","s-9")
    talents.push(talents9);
    let talentn1: Faehigkeiten = new Faehigkeiten("Fährtensuchen", ["MU", "IN","GE"],"C","n-1")
    talents.push(talentn1);
    let talentn2: Faehigkeiten = new Faehigkeiten("Fesseln", ["KL", "FF","KK"],"A","n-2")
    talents.push(talentn2);
    let talentn3: Faehigkeiten = new Faehigkeiten("Fischen & Angeln", ["FF", "GE","KO"],"A","n-3")
    talents.push(talentn3);
    let talentn4: Faehigkeiten = new Faehigkeiten("Orientierung", ["KL", "IN","IN"],"B","n-4")
    talents.push(talentn4);
    let talentn5: Faehigkeiten = new Faehigkeiten("Pflanzenkunde", ["KL", "FF","KO"],"C","n-5")
    talents.push(talentn5);
    let talentn6: Faehigkeiten = new Faehigkeiten("Tierkunde", ["MU", "MU","CH"],"C","n-6")
    talents.push(talentn6);
    let talentn7: Faehigkeiten = new Faehigkeiten("Wildnisleben", ["MU", "GE","KO"],"C","n-7")
    talents.push(talentn7);
    let talentk1: Faehigkeiten = new Faehigkeiten("Brett- & Glücksspiel", ["KL", "KL","IN"],"A","k-1")
    talents.push(talentk1);
    let talentk2: Faehigkeiten = new Faehigkeiten("Geographie", ["KL", "KL","IN"],"B","k-2")
    talents.push(talentk2);
    let talentk3: Faehigkeiten = new Faehigkeiten("Geschichtswissen", ["KL", "KL","IN"],"B","k-3")
    talents.push(talentk3);
    let talentk4: Faehigkeiten = new Faehigkeiten("Götter & Kulte", ["KL", "KL","IN"],"B","k-4")
    talents.push(talentk4);
    let talentk5: Faehigkeiten = new Faehigkeiten("Kriegskunst", ["MU", "KL","IN"],"B","k-5")
    talents.push(talentk5);
    let talentk6: Faehigkeiten = new Faehigkeiten("Magiekunde", ["KL", "KL","IN"],"C","k-6")
    talents.push(talentk6);
    let talentk7: Faehigkeiten = new Faehigkeiten("Mechanik", ["KL", "KL","FF"],"B","k-7")
    talents.push(talentk7);
    let talentk8: Faehigkeiten = new Faehigkeiten("Rechnen", ["KL", "KL","IN"],"A","k-8")
    talents.push(talentk8);
    let talentk9: Faehigkeiten = new Faehigkeiten("Rechtskunde", ["KL", "KL","IN"],"A","k-9")
    talents.push(talentk9);
    let talentk10: Faehigkeiten = new Faehigkeiten("Sagen & Legenden", ["KL", "KL","IN"],"B","k-10")
    talents.push(talentk10);
    let talentk11: Faehigkeiten = new Faehigkeiten("Sphärenkunde", ["KL", "KL","IN"],"B","k-11")
    talents.push(talentk11);
    let talentk12: Faehigkeiten = new Faehigkeiten("Sternkunde", ["KL", "KL","IN"],"A","k-12")
    talents.push(talentk12);
    let talentw1: Faehigkeiten = new Faehigkeiten("Alchimie", ["MU", "KL","FF"],"C","w-1")
    talents.push(talentw1);
    let talentw2: Faehigkeiten = new Faehigkeiten("Boote & Schiffe", ["FF", "GE","KK"],"B","w-2")
    talents.push(talentw2);
    let talentw3: Faehigkeiten = new Faehigkeiten("Fahrzeuge", ["CH", "FF","KO"],"A","w-3")
    talents.push(talentw3);
    let talentw4: Faehigkeiten = new Faehigkeiten("Handel", ["KL", "IN","CH"],"B","w-4")
    talents.push(talentw4);
    let talentw5: Faehigkeiten = new Faehigkeiten("Heilkunde Gift", ["MU", "KL","IN"],"B","w-5")
    talents.push(talentw5);
    let talentw6: Faehigkeiten = new Faehigkeiten("Heilkunde Krankheiten", ["MU", "IN","KO"],"B","w-6")
    talents.push(talentw6);
    let talentw7: Faehigkeiten = new Faehigkeiten("Heilkunde Seele", ["IN", "CH","KO"],"B","w-7")
    talents.push(talentw7);
    let talentw8: Faehigkeiten = new Faehigkeiten("Heilkunde Wunden", ["KL", "FF","FF"],"D","w-8")
    talents.push(talentw8);
    let talentw9: Faehigkeiten = new Faehigkeiten("Holzbearbeitung", ["FF", "GE","KK"],"B","w-9")
    talents.push(talentw9);
    let talentw10: Faehigkeiten = new Faehigkeiten("Lebensmittelbearbeitung", ["IN", "FF","FF"],"A","w-10")
    talents.push(talentw10);
    let talentw11: Faehigkeiten = new Faehigkeiten("Lederbearbeitung", ["FF", "GE","KO"],"B","w-11")
    talents.push(talentw11);
    let talentw12: Faehigkeiten = new Faehigkeiten("Malen & Zeichnen", ["IN", "FF","FF"],"A","w-12")
    talents.push(talentw12);
    let talentw13: Faehigkeiten = new Faehigkeiten("Metallbearbeitung", ["FF", "KO","KK"],"C","w-13")
    talents.push(talentw13);
    let talentw14: Faehigkeiten = new Faehigkeiten("Musizieren", ["CH", "FF","KO"],"A","w-14")
    talents.push(talentw14);
    let talentw15: Faehigkeiten = new Faehigkeiten("Schlösserknacken", ["IN", "FF","FF"],"C","w-15")
    talents.push(talentw15);
    let talentw16: Faehigkeiten = new Faehigkeiten("Steinbearbeitung", ["FF", "FF","KK"],"A","w-16")
    talents.push(talentw16);
    let talentw17: Faehigkeiten = new Faehigkeiten("Stoffbearbeitung", ["KL", "FF","FF"],"C","w-17")
    talents.push(talentw17);
    this.fertigkeiten = talents;

  }
  createBattleTechniques(){

  }

}
