import { ChangeEvent, useContext, useState } from "react";
import { IModifierProps } from "./Modifier.types";
import { RestaurantContext } from "@/contexts/Restaurant";
import { IModifierChoice } from "@/types/menu";

export const Modifier = ({
  modifier,
  addModifier,
  removeModifier,
}: IModifierProps) => {
  const { currency } = useContext(RestaurantContext);

  const [itemIds, setItemIds] = useState<number[]>([]);

  const changeModifier = (
    e: ChangeEvent<HTMLInputElement>,
    modifierItem: IModifierChoice
  ) => {
    if (e.currentTarget.checked && itemIds.length < modifier.maxChoices) {
      addModifier(modifier.id, modifierItem);
      setItemIds((current) => [...current, modifierItem.id]);
    } else if (!e.currentTarget.checked) {
      removeModifier(modifier.id, modifierItem.id);
      setItemIds((current) => current.filter((id) => id !== modifierItem.id));
    }
  };

  return (
    <div>
      <div className="p-4 leading-longText">
        <span className="block font-bold">{modifier.name}</span>
        <span className="block text-secondaryText">
          Select {modifier.maxChoices}{" "}
          {modifier.maxChoices > 1 ? "options" : "option"}
        </span>
      </div>
      <div>
        {modifier.items.map((item) => (
          <div
            key={item.id}
            className="bg-white px-4 py-2 flex justify-between items-center"
          >
            <div className="[&>span]:block">
              <span>{item.name}</span>
              <span className="text-itemDescription">
                {currency}
                {item.price}
              </span>
            </div>
            <input
              type="checkbox"
              name={item.id.toString()}
              className={`bg-white before:bg-secondaryText border-secondaryText text-secondaryText`}
              onChange={(e) => changeModifier(e, item)}
              disabled={
                !itemIds.find((id) => id === item.id) &&
                modifier.maxChoices === itemIds.length
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};
