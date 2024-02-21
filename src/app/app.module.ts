import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { ConnexionComponent } from './connexion/connexion.component';
import { DescriptionComponent } from './description/description.component';
import { SearchComponent } from './search/search.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationAucunResultatComponent } from './notification-aucun-resultat/notification-aucun-resultat.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    NavBarComponent,
    ConnexionComponent,
    DescriptionComponent,
    SearchComponent,
    NotificationAucunResultatComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
