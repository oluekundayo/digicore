import { AppRoutingModule } from './app-routing/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './pages/game/game.component';
import { TestComponent } from './pages/test/test.component';
import { Test2Component } from './pages/test2/test2.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
