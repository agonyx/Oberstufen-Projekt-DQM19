import {Personaldata} from "./player-attributs/personaldata";
import {Base} from "./player-attributs/base";
import {stats} from "./player-attributs/stats";
import {Spezies} from "./Spezies";
import {PlayerTalents} from "./player-attributs/playerTalents";
import {Kampftechniken} from "./kampftechniken";
import {Inventory} from "./inventory";
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
              public inventar: Inventory,

              public languages: Language[],
              public writings: writing[],
              public vorteil: advantages[],
              public nachteile: advantages[],
              public LepBought: number, public LepLost: number,
              public AspBought: number, public AspLost:number,
              public KapBought: number,public KapLost: number,
			  public kampftechniken?: Kampftechniken[]
  ) {

  }
}
