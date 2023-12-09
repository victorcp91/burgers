import { IMenuItem } from "@/types";
import { ICartItem } from "@/types/cart";
import { CartActionKind } from "./Cart.enums";

export interface ICartContextType {
  cart: ICartItem[];
  addToCart: (item: IMenuItem, qty: number) => void;
  updateItem: (uniqueId: string, qty: number) => void;
  removeItem: (uniqueId: string) => void;
}

export interface ProviderProps {
  children: JSX.Element;
}

export interface CartAction {
  type: CartActionKind;
  payload: {
    item?: ICartItem;
    uniqueId?: string;
    initialData?: ICartItem[];
    saveCart: (cart: ICartItem[]) => void;
  };
}
