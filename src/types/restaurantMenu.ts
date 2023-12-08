export enum ERestaurantAvailability {
  AVAILABLE = "AVAILABLE_NOW",
  NOT_AVAILABLE = "NOT_AVAILABLE",
}

interface IImage {
  id: number;
  image: string;
}

export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  alcoholic: 0 | 1;
  price: number;
  position: number;
  visible: 0 | 1;
  availabilityType: ERestaurantAvailability;
  sku: string;
  images: IImage[];
  available: boolean;
}

export interface IMenuSection {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: 1 | 0;
  images: IImage[];
  items: IMenuItem[];
}
