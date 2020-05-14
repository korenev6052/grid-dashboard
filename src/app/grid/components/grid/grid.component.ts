import {Component, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponentInterface, GridType} from "angular-gridster2";
import set = Reflect.set;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  private _items: GridsterItem[];
  @Input() set items(items: GridsterItem[]) {
    this._items = items;
  }
  get items(): GridsterItem[] {
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

  private onItemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    if (!item.data.isSection) {
      return;
    }

    setTimeout(() => {
      const {cols, rows} = item;
      console.log(cols, rows);
    }, 0);
  }

}
