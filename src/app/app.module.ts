import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageComponent } from './message/message.component';
import { UserItemComponent } from './user-item/user-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChatroomComponent, MessageComponent, UserItemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
