import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	title = 'JLAmerican-Remax'
	description = 'Welcome to out site and get ready to experience a better way to buy real estate'

	constructor() { }

	ngOnInit() {
	}
}