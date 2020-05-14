import {Component, Input, OnInit} from '@angular/core';
import {GridsterItem} from "angular-gridster2";

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {

  @Input() item: GridsterItem;

  constructor() {}

  ngOnInit() {}

}
