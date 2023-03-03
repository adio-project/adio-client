import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PlaycreateComponent } from './playcreate/playcreate.component';
import { LoginformComponent } from './loginform/loginform.component';
import { GamecreateComponent } from './gamecreate/gamecreate.component';
import { ProfileComponent } from './profile/profile.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { PlaygameComponent } from './playgame/playgame.component';
import { GameroomComponent } from './gameroom/gameroom.component';

// TODO: add titles
const routes: Routes = [
  // { path: '', component: LoginformComponent }, TODO: later switch to this, and move to home after resolved logging in with spotify/asguest
  {
    path: '',
    component: MainFrameComponent,
    children: [{ path: '', component: LoginformComponent }],
  },
  { path: 'guest', redirectTo: 'home/play-create', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'play-create', component: PlaycreateComponent },
      { path: 'create-game', component: GamecreateComponent },
      { path: 'play-game', component: PlaygameComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  { path: 'gameroom', component: GameroomComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
