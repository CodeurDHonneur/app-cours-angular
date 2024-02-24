import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserLists } from '../album';
import { AlbumService } from '../album.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit {
  usersList?: UserLists[];


  fomrConnect = new FormGroup({
    nameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private serviceAlbum: AlbumService,
    private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void { }

  submitFormConnect() {

    this.authService.getUsers().subscribe(users => this.usersList = users);

    const nameOrEmail = this.fomrConnect.value.nameOrEmail;
    const password = this.fomrConnect.value.password;

    const searchUser: UserLists | undefined = this.usersList?.find(
      users => (
        users.name === nameOrEmail
        || users.email === nameOrEmail
      )
        && users.password === password)

        if(searchUser == undefined){
          this.router.navigateByUrl("/inscription");
        } else {
          this.router.navigateByUrl('/dashboard');
        }
    // this.serviceAlbum.submiteFormConnexion(
    //   this.fomrConnect.value.nameOrEmail ?? '', 
    //   this.fomrConnect.value.password ?? ''
    // )}
  }
}
