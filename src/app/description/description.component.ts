import { Component, Input, OnInit, inject } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  @Input() albumSelected?: Album;
  idAlbum?: string;
  route: ActivatedRoute =  inject(ActivatedRoute);

  constructor(
    private serviceAlbum: AlbumService,
    private http: HttpClient
    )
  {
    this.idAlbum = this.route.snapshot.params['id'];
  }

  ngOnInit(){
    if(this.idAlbum)
    this.serviceAlbum.getAlbumSelected(this.idAlbum).subscribe(album => this.albumSelected = album);
    // this.albumSelected = this.serviceAlbum.getAlbumSelected(this.idAlbum);
  }
}
