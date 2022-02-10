import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { PlayerComponent } from '../components/player/player.component';
import { MasterComponent } from '../components/master/master.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainmenu', pathMatch: 'full' },
  { path: 'mainmenu', component: MainMenuComponent },
  { path: 'player', component:  PlayerComponent},
  { path: 'master', component:  MasterComponent}
]; // sets up routes constant where you define your routes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }