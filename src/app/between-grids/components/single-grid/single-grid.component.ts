import {Component, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterComponent, GridsterConfig, GridType} from "angular-gridster2";
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-single-grid',
  templateUrl: './single-grid.component.html',
  styleUrls: ['./single-grid.component.scss']
})
export class SingleGridComponent implements OnInit {

  @Input() items: GridItem[];

  grid: GridsterComponent;
  options: GridsterConfig;

  constructor() {}

  ngOnInit() {
    this.initOptions();
  }

  private initOptions() {
    this.options = {
      gridType: GridType.ScrollVertical,
      displayGrid: DisplayGrid.Always,
      minCols: 8,
      maxCols: 8,
      minRows: 10,
      maxRows: 100,
      margin: 0,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      initCallback: this.onGridInit.bind(this),
      mobileBreakpoint: 0,
    };
  }

  private onGridInit(gridsterComponent: GridsterComponent) {
    this.grid = gridsterComponent;
    console.log(this.grid);
  }

}
