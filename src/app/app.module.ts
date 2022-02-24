import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { MessageComponent } from './components/message/message.component';
import { UserItemComponent } from './components/user-item/user-item.component';

import {ChatService} from "./services/chat.service";
import { UserListComponent } from './components/user-list/user-list.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  AppRoutingModule ],
  declarations: [ AppComponent, MainMenuComponent, ChatroomComponent, MessageComponent, UserItemComponent, UserListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatService]

})
export class AppModule { }
