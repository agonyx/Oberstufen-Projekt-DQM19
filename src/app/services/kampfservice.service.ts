import { Injectable } from '@angular/core';
import {Kampftechniken} from "../models/kampftechniken";

@Injectable({
  providedIn: 'root'
})
export class KampfserviceService {
  kf: Kampftechniken[] = [];
  constructor() {
  this.createKampftechniken()
  }
  createKampftechniken() {
    this.kf.push(new Kampftechniken("Armbrüste", "FF", "B"));
    this.kf.push(new Kampftechniken("Bögen", "FF", "C"));
    this.kf.push(new Kampftechniken("Wurfwaffen", "FF", "B"));
    this.kf.push(new Kampftechniken("Dolche", "GE", "B"));
    this.kf.push(new Kampftechniken("Fechtwaffen", "GE", "C"));
    this.kf.push(new Kampftechniken("Hiebwaffen", "KK", "C"));
    this.kf.push(new Kampftechniken("Kettenwaffen", "KK", "C"));
    this.kf.push(new Kampftechniken("Lanzen", "KK", "B"));
    this.kf.push(new Kampftechniken("Raufen", "GE/KK", "B"));
    this.kf.push(new Kampftechniken("Schilde", "KK", "C"));
    this.kf.push(new Kampftechniken("Schwerter", "GE/KK", "C"));
    this.kf.push(new Kampftechniken("Stangenwaffen", "GE/KK", "C"));
    this.kf.push(new Kampftechniken("Zweihandhiebwaffen", "KK", "C"));
    this.kf.push(new Kampftechniken("Zweihandschwerter", "KK", "B"));
  }

}
