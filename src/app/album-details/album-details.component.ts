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
@Output() playToPlay: EventEmitter<string> = new EventEmitter();

constructor(private serviceAlbum: AlbumService){}

ngOnInit(): void {
 
}

play(value : string){
  this.playToPlay.emit(value);
}
}
