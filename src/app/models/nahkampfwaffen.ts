import {Kampftechniken} from "./kampftechniken";

export class Nahkampfwaffen {
  constructor(public waffe: string, public kampftechnik:Kampftechniken, public schadensberechnung1:string,public schadensberechnung2: number, public TP: string, public AT_PAMOD1: number, public AT_PAMOD2:number) {
  }
}
