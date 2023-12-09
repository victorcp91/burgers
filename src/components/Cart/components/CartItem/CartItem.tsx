import { useContext, useMemo } from "react";
import PlusButton from "../../../PlusButton";
import SubtractionButton from "../../../SubtractionButton";
import { ICartItemProps } from "./CartItem.types";
import { IModifierChoice } from "@/types/menu";
import {
  getFormattedMonetaryValue,
  getModifierItems,
  getModifiersTotal,
} from "@/utils";
import { RestaurantContext } from "@/contexts/Restaurant";
import { CartContext } from "@/contexts/Cart";

export const CartItem = ({ item }: ICartItemProps) => {
  const { currency } = useContext(RestaurantContext);
  const { updateItem, removeItem } = useContext(CartContext);

  const modifiersItems = useMemo(() => getModifierItems(item), [item]);

  const remove = () => {
    if (item.qty === 1) {
      removeItem(item.uniqueId);
    } else {
      updateItem(item.uniqueId, item.qty - 1);
    }
  };

  const add = () => {
    updateItem(item.uniqueId, item.qty + 1);
  };

  return (
    <div className="w-full bg-white p-4 border-b-2 border-b-itemSeparator">
      <div className="flex justify-between">
        <span className="block">{item.name}</span>
        <span className="block font-medium ">
          {currency}
          {getFormattedMonetaryValue(
            modifiersItems.length
              ? getModifiersTotal(modifiersItems) * item.qty
              : item.price * item.qty
          )}
        </span>
      </div>
      {modifiersItems.map((modifierItem) => (
        <span key={modifierItem.id} className="block text-secondaryText">
          {modifierItem.name} (+${currency}
          {getFormattedMonetaryValue(modifierItem.price)})
        </span>
      ))}
      <div className="flex items-center font-bold m-2">
        <SubtractionButton onClick={remove} />
        <span className="w-8 text-center">{item.qty}</span>{" "}
        <PlusButton onClick={add} />
      </div>
    </div>
  );
};
