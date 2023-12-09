import { IModifierChoice } from "@/types/menu";

const getModifiersTotal = (modifierItems: IModifierChoice[]) =>
  modifierItems.map((m) => m.price).reduce((acc, price) => acc + price, 0);

export default getModifiersTotal;
