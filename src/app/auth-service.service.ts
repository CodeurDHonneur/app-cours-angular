import { Injectable } from '@angular/core';
import {UserLists} from './album';
import {  Observable, pipe, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  usersList?: UserLists;

  private userListsUrl = 'https://music-5c6af-default-rtdb.europe-west1.firebasedatabase.app/userLists';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserLists[]>{
    return this.http.get<UserLists[]>(this.userListsUrl + '/.json', this.httpOptions)
      .pipe(
        map(users => _.values(users))
      )
  }

  // recupUser(nameOrEmail: string, password: string): UserLists | undefined {
  //    this.getUsers().subscribe(users = this.usersList = users)
  // }
  // searcheUser(nameOrEmail: string, password: string): Observable<UserLists> | undefined{

  //   return this.http.get<UserLists>(this.userListsUrl + '/.json', this.httpOptions)
  //   .pipe(
  //     // map(users => _.values(users)),
  //     map(users => {
  //       const usersArray: UserLists[] = _.values(users);
  //       const user = usersArray.find(user => (user.name === nameOrEmail || user.email === nameOrEmail) && user.password === password);
  //       return user ? user : null; // Renvoie l'utilisateur s'il est trouvé, sinon renvoie null
  //   })
  //   )
  // }
}
