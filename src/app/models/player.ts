import {Personaldata} from "./player-attributs/personaldata";
import {Base} from "./player-attributs/base";
import {stats} from "./player-attributs/stats";
import {Spezies} from "./Spezies";

export class Player {
  constructor(public id: number,
              public APg: number,
              public spezies: Spezies,
              public playerstats: stats,
              public playerPersonaldata: Personaldata,
              public basestats: Base,
              public spg: number,
              public spa: number,

  ) {

  }
}
