import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DescriptionComponent } from './description/description.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
  }, 
  {
    path: '',
    //component: AlbumsComponent
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    
  },
  {
    path: "connexion/inscription",
    component: InscriptionComponent,
    
  },
  {
    path: 'albums/description/:id',
    component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
