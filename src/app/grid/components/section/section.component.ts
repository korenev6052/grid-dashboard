import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {DisplayGrid, GridsterComponent, GridsterConfig, GridType} from "angular-gridster2";
import {Subject} from "rxjs";
import {filter, takeUntil} from "rxjs/operators";
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit, OnDestroy {

  private _item: GridItem = null;
  @Input() set item(item: GridItem) {
    this._item = item;
    this.initOptions(item);
  }
  get item(): GridItem {
    return this._item;
  }

  @Input() resizeEvent: EventEmitter<GridItem>;

  grid: GridsterComponent = null;
  options: GridsterConfig = {};
  innerItems: GridItem[] = [];
  resizeEventStop: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {
    this.innerItems = this._item.data.sectionItems;

    this.resizeEvent
      .pipe(
        takeUntil(this.resizeEventStop),
        filter((item: GridItem) => item.data.id === this.item.data.id)
      )
      .subscribe((item: GridItem) => {
        this.updateGridSize(item);
      });
  }

  private initOptions(item: GridItem) {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      minCols: item.data.sectionCols,
      maxCols: item.data.sectionCols,
      minRows: item.data.sectionRows,
      maxRows: item.data.sectionRows,
      margin: 0,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      initCallback: this.onGridInit.bind(this),
    };
  }

  private updateGridSize(item: GridItem) {
    this.options.minCols = item.data.sectionCols;
    this.options.maxCols = item.data.sectionCols;
    this.options.minRows = item.data.sectionRows;
    this.options.maxRows = item.data.sectionRows;
    this.grid.options.api.optionsChanged();
  }

  private onGridInit(gridsterComponent: GridsterComponent) {
    this.grid = gridsterComponent;
  }

  ngOnDestroy() {
    this.resizeEventStop.next();
    this.resizeEventStop.complete();
  }

}
