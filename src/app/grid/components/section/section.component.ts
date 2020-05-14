import {Component, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from "angular-gridster2";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  private _parentItem: GridsterItem;
  @Input() set parentItem(parentItem: GridsterItem) {
    console.log('parentItem', parentItem);
    this._parentItem = parentItem;
    const {sectionCols, sectionRows} = parentItem.data;
    this.initOptions(sectionCols, sectionRows);
    this.items = parentItem.data.sectionItems;
    console.log(this.items);
  }
  get parentItem(): GridsterItem {
    return this._parentItem;
  }

  options: GridsterConfig = {};
  items: GridsterItem[] = [];

  constructor() {}

  ngOnInit() {}

  private initOptions(cols: number, rows: number) {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      minCols: cols,
      maxCols: cols,
      minRows: rows,
      maxRows: rows,
      margin: 0,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      }
    };
  }

}
