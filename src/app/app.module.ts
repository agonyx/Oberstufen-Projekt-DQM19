import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, MainMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
