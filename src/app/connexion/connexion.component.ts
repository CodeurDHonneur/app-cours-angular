import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})

export class ConnexionComponent implements OnInit{
  fomrConnect = new FormGroup({
    nameOrEmail: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private serviceAlbum: AlbumService){}

  ngOnInit(): void {}

  submitFormConnect(){
    this.serviceAlbum.submiteFormConnexion(
      this.fomrConnect.value.nameOrEmail ?? '', 
      this.fomrConnect.value.password ?? ''
    )}
  
}
