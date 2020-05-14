import {GridsterItem} from "angular-gridster2";

export class GridItemData {
  id: string;
  isSection: boolean;
  sectionCols?: number;
  sectionRows?: number;
  sectionItems?: GridsterItem;
}
