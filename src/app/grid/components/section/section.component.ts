import {Component, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridType} from "angular-gridster2";
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  private _parentItem: GridItem;
  @Input() set parentItem(parentItem: GridItem) {
    this._parentItem = parentItem;
    const {sectionCols, sectionRows} = parentItem.data;
    this.initOptions(sectionCols, sectionRows);
    this.items = parentItem.data.sectionItems;
  }
  get parentItem(): GridItem {
    return this._parentItem;
  }

  options: GridsterConfig = {};
  items: GridItem[] = [];

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
