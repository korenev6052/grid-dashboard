import {Component, EventEmitter, Input, OnInit} from '@angular/core';
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() item: GridItem;
  @Input() resizeEvent: EventEmitter<GridItem>;

  constructor() {}

  ngOnInit() {}

}
