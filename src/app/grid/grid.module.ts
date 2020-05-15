import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GridsterModule} from 'angular-gridster2';
// app imports
import {GridComponent} from './components/grid/grid.component';
import {WidgetComponent} from './components/widget/widget.component';
import {SectionComponent} from './components/section/section.component';
import {GridItemComponent} from './components/grid-item/grid-item.component';

@NgModule({
  declarations: [
    GridComponent,
    WidgetComponent,
    SectionComponent,
    GridItemComponent,
  ],
  imports: [
    CommonModule,
    GridsterModule,
  ],
  exports: [
    GridComponent,
  ],
})
export class GridModule {}
