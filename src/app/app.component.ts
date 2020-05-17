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
      {cols: 2, rows: 2, x: 0, y: 0, data:
        {
          id: '1001',
          isSection: false
        }
      },
      {cols: 4, rows: 2, x: 3, y: 0, data:
        {
          id: '1002',
          isSection: true,
          sectionCols: 4,
          sectionRows: 2,
        }
      },
    ];
  }

}
