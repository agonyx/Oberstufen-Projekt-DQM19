import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { MessageComponent } from './components/message/message.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import {AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";

import { ChatService } from "./services/chat.service";
import { UserListComponent } from './components/user-list/user-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import {environment} from "../environments/environment";
import { TesteComponent } from './teste/teste.component';
import { PlayerTalentsComponent } from './components/player-talents/player-talents.component';
import {MasterComponent} from "./components/master/master.component";
import {PlayerComponent} from "./components/player/player.component";
import { BodyTalentsComponent } from './components/player-talents/body-talents/body-talents.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, NgbModule,AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule ],
  declarations: [ AppComponent, MainMenuComponent, ChatroomComponent, MessageComponent, UserItemComponent, UserListComponent, ChatFormComponent, FeedComponent, TesteComponent, PlayerTalentsComponent, MasterComponent, PlayerComponent, BodyTalentsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatService]

})
export class AppModule { }
