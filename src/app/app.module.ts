import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './components/chat/chatroom/chatroom.component';
import { MessageComponent } from './components/message/message.component';
import {AngularFireModule, FIREBASE_APP_NAME, FIREBASE_OPTIONS} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import { ChatService } from "./services/chat.service";
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatFormComponent } from './components/chat/chat-form/chat-form.component';
import { FeedComponent } from './components/chat/feed/feed.component';
import {environment} from "../environments/environment";
import { PlayerTalentsComponent } from './components/player-talents/player-talents.component';
import {MasterComponent} from "./components/master/master.component";
import {PlayerComponent} from "./components/player/player.component";
import { BodyTalentsComponent } from './components/player-talents/body-talents/body-talents.component';
import { BaseInfoComponent } from './components/base-info/base-info.component';
import { SocietyTalentsComponent } from './components/player-talents/society-talents/society-talents.component';
import {CheckboxModule} from "primeng/checkbox";
import { PlayerSelectComponent } from './components/player-select/player-select.component';
import {PlayerService} from "./services/player.service";
import {FertigkeitenService} from "./services/fertigkeiten.service";
import { NatureTalentsComponent } from './components/player-talents/nature-talents/nature-talents.component';
import { KnowledgeTalentsComponent } from './components/player-talents/knowledge-talents/knowledge-talents.component';
import { WorkTalentsComponent } from './components/player-talents/work-talents/work-talents.component';
import { PlayerEquipmentComponent } from './player-equipment/player-equipment.component';
@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule, AngularFireModule.initializeApp(environment.firebase), AngularFireDatabaseModule, CheckboxModule],
  declarations: [ AppComponent, MainMenuComponent, ChatroomComponent, MessageComponent, ChatFormComponent, FeedComponent, PlayerTalentsComponent, MasterComponent, PlayerComponent, BodyTalentsComponent, BaseInfoComponent, SocietyTalentsComponent, PlayerSelectComponent, NatureTalentsComponent, KnowledgeTalentsComponent, WorkTalentsComponent, PlayerEquipmentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ChatService, PlayerService, FertigkeitenService]

})
export class AppModule {

}
