import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageComponent } from './message/message.component';
import { UserItemComponent } from './user-item/user-item.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import {ChatService} from "./services/chat.service";
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, AngularFireModule, AngularFireDatabaseModule ],
  declarations: [ AppComponent, HelloComponent, ChatroomComponent, MessageComponent, UserItemComponent, UserListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatService]
})
export class AppModule { }
