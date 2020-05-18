import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// app imports
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GridModule} from "./grid/grid.module";
import {BetweenGridsModule} from "./between-grids/between-grids.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GridModule,
    BetweenGridsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
