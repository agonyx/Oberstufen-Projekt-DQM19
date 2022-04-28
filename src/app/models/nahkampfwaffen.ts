import {Kampftechniken} from "./kampftechniken";

export class Nahkampfwaffen {
  constructor(public id:string,public waffe: string, public kampftechnik:string, public schadensberechnung1:string,public schadensberechnung2: number, public TP: string, public AT_PAMOD1: number, public AT_PAMOD2:number, public AT?: number, public PA?: number) {
  }
}
