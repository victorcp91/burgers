import { ICartItem } from "@/types/cart";
import { IModifierChoice } from "@/types/menu";

const getModifierItems = (item: ICartItem) => {
  let modifierItems: IModifierChoice[] = [];
  if (item.modifiers?.length) {
    item.modifiers.forEach((m) => {
      modifierItems = [...modifierItems, ...m.items];
    });
  }
  return modifierItems;
};

export default getModifierItems;
