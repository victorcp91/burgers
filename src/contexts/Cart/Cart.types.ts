import { IMenuItem } from "@/types";
import { ICartItem } from "@/types/cart";

export interface ICartContextType {
  cart: ICartItem[];
  addToCart: (item: IMenuItem, qty: number) => void;
  updateItem: (uniqueId: string, qty: number) => void;
  removeItem: (uniqueId: string) => void;
}

export interface ProviderProps {
  children: JSX.Element;
}
