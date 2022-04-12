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
import { AppRoutingModule } from './components/app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { FeedComponent } from './components/feed/feed.component';
import {environment} from "../environments/environment";
@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule, NgbModule,AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule ],
  declarations: [ AppComponent, MainMenuComponent, ChatroomComponent, MessageComponent, UserItemComponent, UserListComponent, ChatFormComponent, FeedComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatService]

})
export class AppModule { }
