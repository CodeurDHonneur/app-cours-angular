import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  @Output() sendName: EventEmitter<string> = new EventEmitter;
  recherche?: string;

  constructor(private albumsService: AlbumService){}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void{
   this.recherche = form.value['rechercheElement'];
   this.sendName.emit(this.recherche);
  }

  onChangeEmit(value: string){
    this.recherche = value;
    this.sendName.emit(this.recherche);
  }
  
}
