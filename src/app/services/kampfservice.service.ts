import { Injectable } from '@angular/core';
import {Kampftechniken} from "../models/kampftechniken";
import {Fernkampfwaffen} from "../models/fernkampfwaffen";
import {ChatService} from "./chat.service";
import {Nahkampfwaffen} from "../models/nahkampfwaffen";

@Injectable({
  providedIn: 'root'
})
export class KampfserviceService {
  kf: Kampftechniken[] = [];
  constructor(private chatservice: ChatService) {
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
    get kt(){
    return this.kf;
    }
    roll(anzahlwuerfe: number, wuerfelseiten:number){
      let string =""
      if(anzahlwuerfe != 0 && wuerfelseiten != 0) {
        for (let i = 0; i < anzahlwuerfe; i++) {
          string += this.randomBetween(1, wuerfelseiten) + " "
        }
        return string;
      } else {
        throw Error;
      }
    }
    rollFW(fw: Fernkampfwaffen) {
       let roll1 = this.roll(1,20);
       if (Number(roll1) <= fw.fernkampf!) {
         let waffeschadenmod = fw.tp.split("+",2);
         let roll2 = Number( this.roll(1, 6)) + Number(waffeschadenmod[1]);


          this.chatservice.sendMessage("Dein Angriff mit " + fw.waffe + " war erfolgreich. Du machst " + roll2 + " Schaden!");
       } else {
         this.chatservice.sendMessage("Dein Angriff mit " + fw.waffe + " hat sein Ziel verfehlt!");
       }
    }
    rollNW(nw: Nahkampfwaffen) {
      let roll1 = this.roll(1, 20);
      if (Number(roll1) <= nw.AT!) {
        let waffeschadenmod = nw.TP.split("+",2);
        let roll2 = Number( this.roll(1, 6)) + Number(waffeschadenmod[1]);

        this.chatservice.sendMessage("Dein Angriff mit " + nw.waffe + " war erfolgreich. Du machst " + roll2 + " Schaden!");
      } else {
        this.chatservice.sendMessage("Dein Angriff mit " + nw.waffe + " hat sein Ziel verfehlt!");
      }
    }
    private randomBetween(min: number, max: number):number {
      return Math.round(Math.random() * (max - min)+ min);
    }
}
