import {GridsterItem} from "angular-gridster2";
// app imports
import {GridItemData} from "./grid-item-data";

export interface GridItem extends GridsterItem {
  data: GridItemData;
}
