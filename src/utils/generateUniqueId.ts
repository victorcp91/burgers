import { IMenuItem } from "@/types";

const generateUniqueId = (item: IMenuItem) => {
  const itemId = item.id;
  let modifierItemIds: string[] = [];
  if (item.modifiers?.length) {
    item.modifiers.forEach((modifier) => {
      if (modifier.items.length) {
        modifierItemIds = [
          ...modifierItemIds,
          ...modifier.items.map((modifierItem) => modifierItem.id.toString()),
        ];
      }
    });
  }
  return [itemId, ...modifierItemIds].toString().replace(",", "");
};

export default generateUniqueId;
