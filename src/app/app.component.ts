import {Component, OnInit} from '@angular/core';
import {GridItem} from "./grid/model/grid-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gridItems: GridItem[] = [];

  constructor() {}

  ngOnInit() {
    this.initGridItems();
  }

  private initGridItems() {
    this.gridItems = [
      {cols: 2, rows: 2, x: 0, y: 0, data: {id: 'w1', isSection: false}},
      {cols: 2, rows: 2, x: 3, y: 0, data: {id: 'w2', isSection: false}},
      {cols: 2, rows: 2, x: 6, y: 0, data: {id: 'w3', isSection: false}},
      {cols: 4, rows: 6, x: 0, y: 3, data: {id: 's1', isSection: true, sectionCols: 4, sectionRows: 6}},
      {cols: 6, rows: 2, x: 5, y: 5, data: {id: 's2', isSection: true, sectionCols: 6, sectionRows: 2}},
    ];
  }

}
