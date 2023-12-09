interface IImage {
  id: number;
  image: string;
}

export interface IModifierChoice {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: 0 | 1;
  availabilityType: string;
  qty: number;
  available: boolean;
}

export interface IModifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: IModifierChoice[];
}
export interface IMenuItem {
  id: number;
  name: string;
  description: string;
  alcoholic: 0 | 1;
  price: number;
  position: number;
  visible: 0 | 1;
  availabilityType: string;
  sku: string;
  images: IImage[];
  available: boolean;
  modifiers?: IModifier[];
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
