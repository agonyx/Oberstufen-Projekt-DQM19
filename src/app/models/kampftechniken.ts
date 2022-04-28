export class Kampftechniken{
  constructor(public kampftechniken:string, public leiteigenschaft: string, public sf:string, public ktw?:number, public ATFK?: number, public PA?: number,public ktwextragekoppt?:number){

  }

  getAT() {
    return this.ATFK;
  }getPA() {
    return this.PA;
  }getKTW(){
    return this.ktw;
  }

}
