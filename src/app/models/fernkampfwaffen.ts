import {Kampftechniken} from "./kampftechniken";

export class Fernkampfwaffen {
  constructor(public waffe:string, public kampftechnik: Kampftechniken, public ladezeiten: number, public tp:string, public munition:number,public reichweite:number, public BF:number, public fernkampf:number, public gewicht: number) {
  }
}
