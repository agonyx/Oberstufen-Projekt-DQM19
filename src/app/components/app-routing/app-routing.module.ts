import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { PlayerComponent } from '../player/player.component';
import { MasterComponent } from '../master/master.component';
import {ChatFormComponent} from "../chat-form/chat-form.component";
import {ChatroomComponent} from "../chatroom/chatroom.component";
const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'mainmenu', component: MainMenuComponent},
  { path: 'player', component: PlayerComponent},
  { path: 'master', component: MasterComponent},
  { path: 'chat-form', component: ChatroomComponent}
]; // sets up routes constant where you define your routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
