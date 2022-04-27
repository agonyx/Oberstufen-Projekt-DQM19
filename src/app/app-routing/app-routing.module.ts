import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { PlayerComponent } from '../components/player/player.component';
import { MasterComponent } from '../components/master/master.component';
import {ChatFormComponent} from "../components/chat/chat-form/chat-form.component";
import {ChatroomComponent} from "../components/chat/chatroom/chatroom.component";
import {PlayerTalentsComponent} from "../components/player-talents/player-talents.component";
import {BodyTalentsComponent} from "../components/player-talents/body-talents/body-talents.component";
import {BaseInfoComponent} from "../components/base-info/base-info.component";
import {SocietyTalentsComponent} from "../components/player-talents/society-talents/society-talents.component";
import {PlayerSelectComponent} from "../components/player-select/player-select.component";
import {NatureTalentsComponent} from "../components/player-talents/nature-talents/nature-talents.component";
import {KnowledgeTalentsComponent} from "../components/player-talents/knowledge-talents/knowledge-talents.component";
import {WorkTalentsComponent} from "../components/player-talents/work-talents/work-talents.component";
import {PlayerBattletechniquesComponent} from "../components/player-battletechniques/player-battletechniques.component";
import {AbilitysComponent} from "../components/abilitys/abilitys.component";
import {AdvantagesDescribtionComponent} from "../components/advantages-describtion/advantages-describtion.component";
import {
  DisadvantagesDescribtionComponent
} from "../components/disadvantages-describtion/disadvantages-describtion.component";
const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'mainmenu', component: MainMenuComponent},
  { path: 'player-Selector', component: PlayerSelectComponent},
  { path: 'player/:id', component: PlayerComponent,
    children: [
      {path: 'base-info', component: BaseInfoComponent},
      {path: 'talents', component: PlayerTalentsComponent,
        children: [
          {path: 'body-talents', component: BodyTalentsComponent },
          {path: 'society-talents', component: SocietyTalentsComponent },
          {path: 'nature-talents', component: NatureTalentsComponent },
          {path: 'knowledge-talents', component: KnowledgeTalentsComponent },
          {path: 'work-talents', component: WorkTalentsComponent }
        ]
      },
      {path: 'kampftechnicken', component: PlayerBattletechniquesComponent},
      {path: 'abilitys', component: AbilitysComponent,
        children: [
          {path: 'advanteges/:name', component: AdvantagesDescribtionComponent},
          {path: 'disadvanteges/:name', component: DisadvantagesDescribtionComponent}
        ]
      }
    ]
  },
  { path: 'master', component: MasterComponent},
  { path: 'chat-form', component: ChatroomComponent}
]; // sets up routes constant where you define your routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
