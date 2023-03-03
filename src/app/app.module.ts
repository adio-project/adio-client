import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootnoteComponent } from './footnote/footnote.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginformComponent } from './loginform/loginform.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { LogoComponent } from './logo/logo.component';
import { PlaycreateComponent } from './playcreate/playcreate.component';
import { GamecreateComponent } from './gamecreate/gamecreate.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { PlaygameComponent } from './playgame/playgame.component';
import { GameroomComponent } from './gameroom/gameroom.component';
import { RequiredinputformComponent } from './requiredinputform/requiredinputform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    NavbarComponent,
    FootnoteComponent,
    LoginformComponent,
    HomeComponent,
    LogoComponent,
    PlaycreateComponent,
    GamecreateComponent,
    ProfileComponent,
    ContactComponent,
    PlaygameComponent,
    GameroomComponent,
    RequiredinputformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
