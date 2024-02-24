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
    this.albumService.getalbums().subscribe(albums =>  this.albums = albums);
  }

  onSelect(id?: string): void{
    if (id)
     this.albumService.getAlbumSelected(id).subscribe(album => this.album = album);
  }

  playParent(event: Album){
    this.idalbumPlay = event.id;
    this.play = true;
    this.album = event;
    this.albumService.switchOn(event)
  }

  pauseAlbum(event: Album){
    this.albumService.switchOff(event);
  }

  valeurDeRecherche(valeurEmit: string): Album[]{
    return this.albums = this.albumService.getResultatRecherche(valeurEmit);
  }
}
