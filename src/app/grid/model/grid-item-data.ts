import {GridItem} from "./grid-item";

export class GridItemData {
  id: string;
  isSection: boolean;
  sectionCols?: number;
  sectionRows?: number;
  sectionItems?: GridItem[];
}
