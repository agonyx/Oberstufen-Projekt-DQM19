import {Personaldata} from "./player-attributs/personaldata";
import {Base} from "./player-attributs/base";
import {stats} from "./player-attributs/stats";
import {Spezies} from "./Spezies";
import {PlayerTalents} from "./player-attributs/playerTalents";
import {Language} from "./language";
import {writing} from "./writing";
import {advantages} from "./player-attributs/advantages";

export class Player {
  constructor(public id: number,
              public APg: number,
              public Apa: number,
              public spezies: Spezies,
              public playerstats: stats,
              public playerPersonaldata: Personaldata,
              public basestats: Base,
              public spg: number,
              public spa: number,
              public talents: PlayerTalents[],
              public languages: Language[],
              public writings: writing[],
              public vorteil: advantages[],
              public nachteile: advantages[],
              public LepBouth: number, public LepLost: number,
              public AspBouth: number, public AspLost:number,
              public KapBouth: number,public KapLost: number
  ) {

  }
}
