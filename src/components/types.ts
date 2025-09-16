export interface Card {
  id: number;
  title: string;
  description?: string;
}

export interface CardPassedDrag extends Card {
  index: number;
  parent: string;
}