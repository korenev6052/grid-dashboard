import {Component, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItemComponentInterface, GridType} from "angular-gridster2";
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private _items: GridItem[];
  @Input() set items(items: GridItem[]) {
    this._items = items;
  }
  get items(): GridItem[] {
    return this._items;
  }

  options: GridsterConfig = {};

  constructor() {}

  ngOnInit() {
    this.initOptions();
  }

  private initOptions() {
    this.options = {
      gridType: GridType.ScrollVertical,
      displayGrid: DisplayGrid.Always,
      minCols: 16,
      maxCols: 16,
      minRows: 10,
      maxRows: 100,
      margin: 0,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      itemResizeCallback: this.onItemResize,
    };
  }

  // todo: update section cols and rows when item was resize
  private onItemResize(item: GridItem, itemComponent: GridsterItemComponentInterface) {
    if (!item.data.isSection) {
      return;
    }

    setTimeout(() => {
      const {cols, rows} = item;
      console.log(item, cols, rows);
    }, 0);
  }

}
