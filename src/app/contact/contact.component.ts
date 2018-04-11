import { Component, OnInit } from '@angular/core';
import { trigger, style, stagger, state, transition, query, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('easeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate("1s ease-in-out", style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 0
        })
      ])
    ]), 
    trigger('in_1', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(2500)
	    ]),
    ]),
    trigger('in_2', [
    	transition(':enter', [
	      style({transform: 'translateY(-100%)'}),
	      animate(3000)
	    ]),
    ]),
    trigger('in_3', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(1400)
	    ])
    ]),
    trigger('in_4', [
    	transition(':enter', [
	      style({transform: 'translateY(-100%)'}),
	      animate(1500)
	    ])
    ]),
    trigger('in_5', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(1100)
	    ])
    ]),
    trigger('in_6', [
    	transition(':enter', [
	      style({transform: 'translateY(-100%)'}),
	      animate(2400)
	    ])
    ]),
    trigger('in_7', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(2500)
	    ])
    ]),
    trigger('in_8', [
    	transition(':enter', [
	      style({transform: 'translateY(-100%)'}),
	      animate(1000)
	    ])
    ]),
    trigger('in_9', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(2000)
	    ])
    ]),
    trigger('in_0', [
    	transition(':enter', [
	      style({transform: 'translateX(-100%)'}),
	      animate(1700)
	    ])
    ]),
  ]
})
export class ContactComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }

  
}
