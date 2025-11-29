
export enum Category {
  ALL = 'ALL',
  INFO = 'INFO',
  CREATOR = 'CREATOR',
  EFFICIENCY = 'EFFICIENCY',
  DEV = 'DEV'
}

export interface Tool {
  id: string;
  name: string;
  category: Category;
  description: string;
  longDescription?: string;
  imageUrl: string;
  icon?: string;
  discount: string;
  discountCode?: string;
  price?: string;
  link: string;
  note?: string;
}

export type ViewMode = 'GRID' | 'LIST';
