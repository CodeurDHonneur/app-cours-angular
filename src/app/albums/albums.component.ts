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
  albums!: Album[];
  idAlbum? : string;
  album?: Album;
  idalbumPlay?: string;
  p: number = 1;
  play = false;

  constructor(private albumService: AlbumService){}

  ngOnInit(): void {
    this.albumService.getalbums.subscribe(albums => this.albums = albums);
  }

  onSelect(id: string): Album | undefined{
    return this.album = this.albumService.getAlbumSelected(id);
  }

  playParent(event: Album){
    this.idalbumPlay = event.id;
    this.play = true;
    this.album = event;
    this.albumService.switchOn(event)
  }

  valeurDeRecherche(valeurEmit: string): Album[]{
    return this.albums = this.albumService.getResultatRecherche(valeurEmit);
  }
}
