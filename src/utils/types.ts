export interface Item {
  id: number;
  title: string;
  description?: string;
}

export interface ItemPassedDrag extends Item {
  index: number;
  parent: string;
}