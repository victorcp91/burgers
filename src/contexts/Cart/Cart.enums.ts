import { ICartItem } from "@/types/cart";

export enum CartActionKind {
  ADD = "ADD",
  REMOVE = "REMOVE",
  UPDATE = "UPDATE",
  LOAD = "LOAD",
}

export interface CartAction {
  type: CartActionKind;
  payload: {
    item?: ICartItem;
    uniqueId?: string;
    initialData?: ICartItem[];
  };
}
