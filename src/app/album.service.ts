import { Injectable } from '@angular/core';
import { Album } from './album';
import { ALBUMS } from './mock-albums';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})


export class AlbumService {
  albums: Album[] = ALBUMS;
  album?: Album;

  private albumsListUrl = 'https://music-5c6af-default-rtdb.europe-west1.firebasedatabase.app/albumLists';
  private albumsUrl = 'https://music-5c6af-default-rtdb.europe-west1.firebasedatabase.app/albums';
  
  subjectAlbum = new Subject<Album>();
  subjectAlbums = new Subject<Album[]>();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) { }

  getalbums(): Observable<Album[]> {

    return this.http.get<Album[]>(this.albumsUrl + '/.json', this.httpOptions)
    .pipe(
      map(albums => _.values(albums)),
      map(albums => {
        return albums.sort(
          (a, b) => {return b.duration - a.duration}
        )
      })
    )
  }

  getAlbumSelected(id: string): Observable<Album>{
    return this.http.get<Album>(this.albumsUrl + `/${id}/.json`)
    .pipe(
      map(album => album)
    );
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

  switchOff(album: Album): void {
    album.status = 'off';

    this.http.put<void>(this.albumsUrl + `/${album.id}/.json`, album).subscribe(
      e => e,
      error => console.warn(error),
      () => {
        this.subjectAlbum.next(album);
      }
    )
  }
    
  

  switchOn(album: Album): void {
    album.status = 'on';
    
    this.http.put<void>(this.albumsUrl + `/${album.id}/.json`, album).subscribe(
      e => e,
      error => console.warn(error),
      () => {
        this.subjectAlbum.next(album);
      }
    )
  }
}
