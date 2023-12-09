import { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { IItemDetailsProps } from "./ItemDetails.types";
import Modifier from "./components/Modifier";
import SubtractionButton from "../SubtractionButton";
import PlusButton from "../PlusButton";
import CloseButton from "../CloseButton";
import ActionButton from "../ActionButton";
import { CartContext } from "@/contexts/Cart";
import { IMenuItem, IModifier, IModifierChoice } from "@/types/menu";
import { deepClone } from "@/utils";
import { RestaurantContext } from "@/contexts/Restaurant";

export const ItemDetails = ({ item, onClose }: IItemDetailsProps) => {
  const { addToCart } = useContext(CartContext);
  const { currency } = useContext(RestaurantContext);

  const [count, setCount] = useState(1);
  const [customItem, setCustomItem] = useState<IMenuItem>(() => {
    const clearItem = deepClone(item);
    clearItem.modifiers?.forEach((_: IModifier, i: number) => {
      if (clearItem.modifiers) {
        clearItem.modifiers[i]!.items = [];
      }
    });
    return clearItem;
  });

  useEffect(() => {
    document.body.style.position = "fixed";
    return () => {
      document.body.style.position = "";
    };
  }, []);

  const orderItem = () => {
    addToCart(customItem, count);
    onClose();
  };

  const increase = () => {
    setCount((current) => current + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((current) => current - 1);
    }
  };

  const addModifier = (modifierId: number, modifierItem: IModifierChoice) => {
    setCustomItem((current: IMenuItem) => {
      const updatedCurrent: IMenuItem = deepClone(current);
      const modifierIndex = updatedCurrent.modifiers?.findIndex(
        (m) => m.id === modifierId
      );
      if (updatedCurrent.modifiers && modifierIndex !== undefined) {
        updatedCurrent.modifiers[modifierIndex]?.items.push(modifierItem);
      }
      return updatedCurrent;
    });
  };

  const removeModifier = (modifierId: number, modifierItemId: number) => {
    setCustomItem((current: IMenuItem) => {
      const updatedCurrent: IMenuItem = deepClone(current);
      const modifierIndex = updatedCurrent.modifiers?.findIndex(
        (m) => m.id === modifierId
      );
      if (updatedCurrent.modifiers && modifierIndex !== undefined) {
        updatedCurrent.modifiers[modifierIndex].items =
          updatedCurrent.modifiers[modifierIndex]?.items.filter(
            (m) => m.id !== modifierItemId
          );
      }
      return updatedCurrent;
    });
  };

  const canAddToCart = useMemo(() => {
    let canAdd = true;
    if (!customItem.modifiers?.length) {
      return canAdd;
    }
    customItem.modifiers.forEach((m) => {
      if (m.items.length < m.minChoices) {
        canAdd = false;
      }
    });
    return canAdd;
  }, [customItem]);

  const total = useMemo(() => {
    const modifiers = customItem.modifiers;
    let sum = 0;
    if (customItem.modifiers?.length) {
      modifiers?.forEach((modifier) => {
        sum += modifier.items.reduce((acc, i) => acc + i.price, 0);
      });
      return sum * count;
    }
    return count * customItem.price;
  }, [customItem, count]);

  return (
    <div className="fixed bg-modalOverlay w-screen h-screen top-0 left-0">
      <div className="fixed flex flex-col top-0 left-0 w-screen h-screen overflow-y-auto bg-secondaryBackground lg:shadow-cards lg:h-fit lg:max-w-[480px] lg:left-2/4 lg:top-2/4 lg:translate-x-[-50%] lg:translate-y-[-50%] lg:min-h-[90vh]">
        <div className="relative w-full h-[265px] lg:h-[320px]">
          <CloseButton
            rounded
            className="absolute top-10 right-4 z-10"
            onClick={onClose}
          />
          {!!item.images?.length && (
            <div className="relative h-full overflow-hidden">
              <Image
                src={item?.images[0].image}
                alt={item.name}
                fill
                priority
                sizes="480"
                style={{ objectFit: "cover" }}
              />
            </div>
          )}
        </div>
        <h4 className="bg-white px-4 pt-4 pb-2 text-2xl font-bold">
          {item.name}
        </h4>
        <p className="bg-white px-4 pb-2 leading-longText text-itemDescription">
          {item.description}
        </p>
        {item.modifiers?.length &&
          item.modifiers.map((modifier) => (
            <Modifier
              key={modifier.id}
              modifier={modifier}
              addModifier={addModifier}
              removeModifier={removeModifier}
            />
          ))}
        <div className="flex flex-1 flex-col justify-end">
          <div className="flex items-center justify-center pt-7 pb-2">
            <SubtractionButton
              size={32}
              disabled={count === 1}
              onClick={decrease}
            />
            <span className="w-16 text-center text-2xl font-semibold">
              {count}
            </span>
            <PlusButton size={32} onClick={increase} />
          </div>
          <div className="px-4 pb-5">
            <ActionButton
              label={`Add to Order • ${currency}${total}`}
              onClick={orderItem}
              disabled={!canAddToCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
