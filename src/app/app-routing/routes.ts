import { Test2Component } from './../pages/test2/test2.component';
import { TestComponent } from './../pages/test/test.component';
import { GameComponent } from './../pages/game/game.component';
import { Routes } from "@angular/router";

export const routes: Routes = [
  {path:'', redirectTo: '/test1', pathMatch: 'full'},
  {path: 'test1', component: GameComponent},
  {path: 'test2', component: TestComponent},
  {path: 'test3', component: Test2Component}
]
