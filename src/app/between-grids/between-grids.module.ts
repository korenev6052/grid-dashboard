import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// app imports
import {BetweenGridsComponent} from './components/between-grids/between-grids.component';
import {SingleGridComponent} from './components/single-grid/single-grid.component';

@NgModule({
  declarations: [
    BetweenGridsComponent,
    SingleGridComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class BetweenGridsModule { }
