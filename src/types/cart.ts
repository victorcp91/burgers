import { IMenuItem } from ".";

export interface ICartItem extends IMenuItem {
  uniqueId: string;
  qty: number;
}
