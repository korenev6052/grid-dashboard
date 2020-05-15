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
  panelItems: GridItem[] = [];

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
      enableEmptyCellDrop: true,
      emptyCellDropCallback: this.onEmptyCellDrop.bind(this),
      itemResizeCallback: this.onItemResize,
    };
  }

  private initPanelItems() {
    this.panelItems = [
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: 'w0', isSection: false}},
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: 's0', isSection: true, sectionCols: 1, sectionRows: 1}},
    ];
  }

  // todo: update section cols and rows when item was resize
  private onItemResize(item: GridItem, itemComponent: GridsterItemComponentInterface) {
    if (!item.data || !item.data.isSection) {
      return;
    }

    setTimeout(() => {
      const {cols, rows} = item;
      // console.log(item, cols, rows);
    }, 0);
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
