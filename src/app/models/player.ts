import {Personaldata} from "./player-attributs/personaldata";
import {Base} from "./player-attributs/base";
import {playerstats} from "./player-attributs/playerstats";
import {Spezies} from "./player-attributs/Spezies";

export class Player {
  constructor(public id: number, public APg: number, public APa: number, public spezies: Spezies, public playerstats: playerstats, public playerPersonaldata: Personaldata, public basestats: Base) {
  }
}
