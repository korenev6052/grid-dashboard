import {Component, OnInit} from '@angular/core';
// app imports
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
      {
        cols: 2,
        rows: 2,
        x: 0,
        y: 0,
        data: {id: '1001', isSection: false}
      },
      {
        cols: 4,
        rows: 2,
        x: 3,
        y: 0,
        data: {id: '1002', isSection: true, sectionCols: 4, sectionRows: 2}
      },
      {
        cols: 6,
        rows: 4,
        x: 0,
        y: 3,
        data: {id: '1003', isSection: true, sectionCols: 6, sectionRows: 4}
      },
      {
        cols: 6,
        rows: 6,
        x: 2,
        y: 8,
        data: {
          id: '1004',
          isSection: true,
          sectionCols: 6,
          sectionRows: 6,
          sectionItems: [
            {cols: 1, rows: 1, x: 0, y: 1, data: {id: '1005', isSection: false}},
            {cols: 1, rows: 1, x: 0, y: 2, data: {id: '1006', isSection: false}}
          ],
        }
      },
      {
        cols: 1,
        rows: 1,
        x: 10,
        y: 0,
        data: {id: '1007', isSection: false}
      },
    ];
  }

}
