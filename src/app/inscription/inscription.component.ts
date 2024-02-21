import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit{

formInscription = new FormGroup({
  userName : new FormControl(''),
  email: new FormControl(''),
  pass: new FormControl(''),
  passConfirm: new FormControl('')
});

constructor(private serviceAlbum: AlbumService){}

ngOnInit(): void {
  
}

submitFormInscription(){
  if(this.formInscription.value.userName
    && this.formInscription.value.email
    && this.formInscription.value.pass
    && this.formInscription.value.passConfirm){
  this.serviceAlbum.submitFormInscription(
      this.formInscription.value.userName,
      this.formInscription.value.email,
      this.formInscription.value.pass,
      this.formInscription.value.passConfirm
    )
  } else {
    // alert('Merci de remplir tous les champs.');
  }
 
}
}
