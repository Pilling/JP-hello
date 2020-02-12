import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image?: Url;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'Waste 2 Energy', cols: 3, rows: 1, color: '#e6c229'},
    {text: 'Writing', cols: 1, rows: 2, color: '#f17105'},
    {text: 'Mountaineering', cols: 1, rows: 1, color: '#6610f2'},
    {text: 'Music and Speaking', cols: 2, rows: 1, color: '#1a8fe3'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
