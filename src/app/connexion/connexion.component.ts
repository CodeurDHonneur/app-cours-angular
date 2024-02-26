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
  usersList!: UserLists[];
  message: string = "";

  fomrConnect = new FormGroup({
    nameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private serviceAlbum: AlbumService,
    private authService: AuthServiceService,
    private router: Router) { }

  ngOnInit(): void { 
    this.authService.getUsers().subscribe(users => this.usersList = users);
  }

  submitFormConnect() {
    this.message = "";
    const nameOrEmail = this.fomrConnect.value.nameOrEmail;
    const password = this.fomrConnect.value.password;

    if(nameOrEmail && password) {
      const length = this.usersList?.length;
      let bool = false;
  
      if(length){
  
        for(let i = 0; i < length; i++){
          
          let searchUser = this.usersList?.find(
            users => (
              users.name === nameOrEmail
              || users.email === nameOrEmail
            )
              && users.password === password)
              console.log(searchUser)
            
              if (searchUser) bool = true;
        }
  
        if(!bool){
          this.router.navigateByUrl("/inscription");
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      }
    } else {
      this.message = "les champs sont obligatoires";
    }
   

   
    
    // this.serviceAlbum.submiteFormConnexion(
    //   this.fomrConnect.value.nameOrEmail ?? '', 
    //   this.fomrConnect.value.password ?? ''
    // )}
  }
}
