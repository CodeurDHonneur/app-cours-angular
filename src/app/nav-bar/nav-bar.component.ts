import { Component } from '@angular/core';
import {state, style, animate, transition, trigger} from '@angular/animations';
import {interval, map, Observable, take} from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],

  animations: [
    trigger('myAnimation', [
      state('open', style({
          height: '100px',
          opacity: 1,
          backgroundColor: 'green'
        })),

        state('close', style({
          height: '100px',
          opacity: 0.25,
          backgroundColor: 'yellow'
        })),
        transition("open => close", [
          animate('2s')
        ])
    ]),

    trigger('openclose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})

export class NavBarComponent {
 isOpen = true; 

 time!: string;

 // interval envoi toutes les secondes un compteur 1, 2, ...
count = interval(1000);

constructor(){
 
  const interval$ = this.count
  .pipe(
    map(num => {
      const hours = Math.floor(num/ 3600);
      const minutes = Math.floor(num / 60);

      return `${hours} h ${minutes - hours * 60} min ${num - minutes * 60} s`;
    }),
    take(12 * 60 * 3)
  );

  // on souscrit à l'Observable interval
  interval$.subscribe(
    num => this.time = num
  );
}

 toggle(){
  this.isOpen = !this.isOpen;
 }

}
