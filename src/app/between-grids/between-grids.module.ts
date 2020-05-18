import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridsterModule} from 'angular-gridster2';
// app imports
import {BetweenGridsComponent} from './components/between-grids/between-grids.component';
import {SingleGridComponent} from './components/single-grid/single-grid.component';

@NgModule({
  declarations: [
    BetweenGridsComponent,
    SingleGridComponent,
  ],
  imports: [
    CommonModule,
    GridsterModule,
  ],
  exports: [
    BetweenGridsComponent,
  ],
})
export class BetweenGridsModule { }
