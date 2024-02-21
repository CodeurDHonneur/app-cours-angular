import { Component } from '@angular/core';
import {state, style, animate, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  // animations: [
  //   trigger('myAnimation', [
  //     state('open', style({
  //       height: '100px',
  //       opacity: 1,
  //       backgroundColor: 'green'
  //     })),
  //     state('close', style({
  //       height: '100px',
  //       opacity: 0.25,
  //       backgroundColor: 'yellow'
  //     })),
  //     // animate('0.2s 100ms'),
  //     transition('open => close', [
  //       animate('2s')
  //     ]),
  //   ])
  // ]
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

 toggle(){
  this.isOpen = !this.isOpen;
 }

}
