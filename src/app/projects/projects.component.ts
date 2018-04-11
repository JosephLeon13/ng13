import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
  	trigger('animateMe', [
  		state('in', style({transform: 'translateX(0)'})),
	    transition('void => *', [
	      style({transform: 'translateY(-100%)'}),
	      animate(600)
	    ])
  	]),
  	trigger('conStruct', [
	    state('inactive', style({
	      color: 'yellow',
	      transform: 'scale(1)'
	    })),
	    state('active', style({
	      color: 'red',
	      transform: 'scale(1.5)'
	    })),
	    transition('inactive => active', [
	    	style({
	    		backgroundColor: 'red',
	    		color: 'black',
	    		transform: 'scale(.6)'
	    	}),
	    	animate('900ms ease-in', style({
	    		backgroundColor: 'black',
	    		transform: 'scale(1.5)'
	    	}))
	    ]),
	    transition('active => inactive', [
	    	style({
	    		backgroundColor: 'white',
	    		color: 'white',
	    		transform: 'scale(3)'
	    	}),
	    	animate('900ms ease-out', style({
	    		backgroundColor: 'black',
	    		color: 'white',
	    		transform: 'scale(1)'
	    	}))
	    ])
    ])
	]
})
export class ProjectsComponent implements OnInit {

public state = 'active';

  constructor() { }

  ngOnInit() {
  }

  toggleState() {
  	this.state = this.state === 'active' ? 'inactive' : 'active';
  }
  

}
