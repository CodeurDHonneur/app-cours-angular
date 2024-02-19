import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit {
  title: string = "Page principale Album Music";
  albums?: Album[];
  idAlbum? : string;
  album?: Album;
  idalbumPlay?: string;

  constructor(private albumService: AlbumService){}

  ngOnInit(): void {
    this.albums = this.albumService.getAlbum();
  }

  onSelect(id: string): Album | undefined{
    return this.album = this.albumService.getAlbumSelected(id);
  }

  playParent(event: string){
    this.idalbumPlay = event;
  }

  valeurDeRecherche(valeurEmit: string): Album[]{
    return this.albums = this.albumService.getResultatRecherche(valeurEmit);
  }
}
