import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

  	trigger('names', [
  		transition('* => *', [
  			query(':enter', style({ opacity: 0 }), {optional: true}),

  			query(':enter', stagger('300ms', [
  				animate('.6s ease-in', keyframes([
					style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
	  				style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
	  				style({opacity: 1, transform: 'translateY(0)', offset: 1.0}),		
  				]))			
  			]), {optional: true})
  			,
  			query(':leave', stagger('300ms', [
  				animate('.6s ease-out', keyframes([
					style({opacity: 1, transform: 'translateY(0)', offset: 0}),
	  				style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
	  				style({opacity: 0, transform: 'translateY(-75%)', offset: 1.0}),		
  				]))			
  			]), {optional: true})
  		])
  	])
  ]

})
export class HomeComponent implements OnInit {

	itemCount: number;
	btnText: string = 'Post';
	contentText: string = '';
	names = [];

  constructor(private _data: DataService) { }

  ngOnInit() {
  	this._data.name.subscribe(res => this.names = res);
  	this._data.changeName(this.names);
  	this.itemCount = this.names.length;
  }

  addName() {
  	this.names.push(this.contentText);
  	this.contentText = '';
  	this.itemCount = this.names.length;
  	this._data.changeName(this.names);
  }

  removeItem(i) {
  		this.names.splice(i, 1);
  		this._data.changeName(this.names);
  		this.itemCount = this.names.length;
  }

}








