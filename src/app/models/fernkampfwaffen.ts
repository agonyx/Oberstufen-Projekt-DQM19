import {Kampftechniken} from "./kampftechniken";

export class Fernkampfwaffen {
  constructor(public id:string,public waffe:string, public kampftechnik: string, public ladezeiten: number, public tp:string, public munition:string,public reichweite:string, public BF:number,public gewicht: number, public fernkampf?:number) {
  }
}
