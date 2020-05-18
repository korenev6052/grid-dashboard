import {Component, OnInit} from '@angular/core';
// app imports
import {GridItem} from "../../model/grid-item";

@Component({
  selector: 'app-between-grids',
  templateUrl: './between-grids.component.html',
  styleUrls: ['./between-grids.component.scss']
})
export class BetweenGridsComponent implements OnInit {

  firstGridItems: GridItem[] = [];
  secondGridItems: GridItem[] = [];

  constructor() {}

  ngOnInit() {
    this.initFirstGridItems();
    this.initSecondGridItems();
  }

  initFirstGridItems() {
    this.firstGridItems = [
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: '1001', isSection: false}},
      {cols: 1, rows: 1, x: 2, y: 0, data: {id: '1002', isSection: false}},
    ];
  }

  initSecondGridItems() {
    this.secondGridItems = [
      {cols: 1, rows: 1, x: 0, y: 0, data: {id: '1001', isSection: false}},
      {cols: 1, rows: 1, x: 2, y: 0, data: {id: '1002', isSection: false}},
    ];
  }

}
