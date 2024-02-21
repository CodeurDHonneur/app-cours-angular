import { Injectable } from '@angular/core';
import { Album } from './album';
import { ALBUMS } from './mock-albums';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[] = ALBUMS;

  constructor() { }

  getAlbum(): Album[] {
    return this.albums;
  }

  getAlbumSelected(id?: string): Album | undefined{
    return this.albums.find(item => item.id == id);
  }

  getResultatRecherche(value: string): Album[]{
    return this.albums.filter(item => item?.title.toLocaleLowerCase().includes(value.toLocaleLowerCase()));
  }
  // paginate(start: number, end: number): Album[]{
    
  submiteFormConnexion(nameOrEmail: string, password: string){
    console.log(`Le nom d'utilisateur ou l'email suivant ${nameOrEmail} a le mot de passe suivant ${password}`)
  }

  submitFormInscription(
    userName: string,
    email: string,
    pass: string,
    passConfirm: string,
  ){
    console.log(`Notre nouvel utilisateur a les informations suivantes : nom => ${userName}, email => ${email}, mot de pase => ${pass}, pour confirmation => ${passConfirm}`)
  }
}
