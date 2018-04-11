import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, keyframes }  from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
	  trigger('slideIn', [
	    state('in', style({transform: 'translateX(0)'})),
		    transition('void => *', [
		      style({transform: 'translateX(-100%)'}),
		      animate(600)
		    ])
		]),
	  trigger('rushIn', [
	    state('in', style({transform: 'translateX(0)'})),
		    transition('void => *', [
		      style({transform: 'translateX(-100%)'}),
		      animate(1200)
		    ])
		]),
	  trigger('flyIn', [
	    state('in', style({transform: 'translateX(0)'})),
		    transition('void => *', [
		      style({transform: 'translateX(-100%)'}),
		      animate(1800)
		    ])
		])
    ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
