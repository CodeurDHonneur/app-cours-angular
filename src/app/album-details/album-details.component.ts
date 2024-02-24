import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})

export class AlbumDetailsComponent implements OnInit {
@Input() album?: Album;
@Output() playToPlay: EventEmitter<Album> = new EventEmitter();
@Output() pauseSong: EventEmitter<Album> = new EventEmitter();

showplayer: boolean = false;



constructor(private serviceAlbum: AlbumService){}

ngOnInit(): void {
 
}

play(value : Album){
  this.playToPlay.emit(value);
  this.showplayer = true;
}
pause(value: Album){
this.pauseSong.emit(value);
}
}
