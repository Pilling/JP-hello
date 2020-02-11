import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image?: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Mountain', cols: 3, rows: 1, color: '#e6c229'},
    {text: 'Writing', cols: 1, rows: 2, color: '#f17105'},
    {text: 'Design/Software', cols: 1, rows: 1, color: '#6610f2'},
    {text: 'Wandering', cols: 2, rows: 1, color: '#1a8fe3'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
