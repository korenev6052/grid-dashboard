import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {DisplayGrid, GridsterComponent, GridsterConfig, GridsterItemComponent, GridType} from "angular-gridster2";
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() items: GridItem[];

  grid: GridsterComponent = null;
  options: GridsterConfig = null;
  panelItems: GridItem[] = [];
  resizeEvent: EventEmitter<GridItem> = new EventEmitter<GridItem>();

  constructor() {}

  ngOnInit() {
    this.initOptions();
    this.initPanelItems();
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
      initCallback: this.onGridInit.bind(this),
      enableEmptyCellDrop: true,
      emptyCellDropCallback: this.onEmptyCellDrop.bind(this),
      itemResizeCallback: this.onItemResize.bind(this),
    };
  }

  private initPanelItems() {
    this.panelItems = [
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: '0000', isSection: false}},
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: '0000', isSection: true, sectionCols: 1, sectionRows: 1}},
    ];
  }

  private onGridInit(gridsterComponent: GridsterComponent) {
    this.grid = gridsterComponent;
  }

  private onItemResize(item: GridItem, itemComponent: GridsterItemComponent) {
    if (!item.data || !item.data.isSection) {
      return;
    }

    setTimeout(() => {
      const cols = item.cols;
      const rows = item.rows;
      item.data.sectionCols = cols;
      item.data.sectionRows = rows;
      this.resizeEvent.emit(item);
    });
  }

  onEmptyCellDrop(event: DragEvent, item: GridItem) {
    const eventItem: GridItem = JSON.parse(event.dataTransfer.getData('text/plain'));
    const newItem = Object.assign({}, eventItem, item);
    this.items.push(newItem);
  }

  onDragstartPanelItem(event: DragEvent, panelItem: GridItem) {
    event.dataTransfer.setData('text/plain', JSON.stringify(panelItem));
    event.dataTransfer.dropEffect = 'copy';
  }

}
