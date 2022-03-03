import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { PlayerComponent } from '../components/player/player.component';
import { MasterComponent } from '../components/master/master.component';
import {ChatFormComponent} from "../components/chat-form/chat-form.component";
import {ChatroomComponent} from "../components/chatroom/chatroom.component";
import {PlayerTalentsComponent} from "../components/player-talents/player-talents.component";
const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'mainmenu', component: MainMenuComponent},
  { path: 'player', component: PlayerComponent,
    children: [
      {path: 'talents', component: PlayerTalentsComponent}
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
