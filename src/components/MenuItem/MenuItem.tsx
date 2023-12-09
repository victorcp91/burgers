import { useContext, useMemo } from "react";
import Image from "next/image";
import { IMenuItemProps } from "./MenuItem.types";
import { RestaurantContext } from "@/contexts/Restaurant";
import { getFormattedMonetaryValue } from "@/utils";
import { CartContext } from "@/contexts/Cart";

export const MenuItem = ({ item, onClick }: IMenuItemProps) => {
  const { currency } = useContext(RestaurantContext);
  const { cart } = useContext(CartContext);

  const itemCount = useMemo(() => {
    const quantities = cart.filter((c) => c.id === item.id).map((c) => c.qty);
    if (quantities.length) {
      return quantities.reduce((acc, c) => acc + c);
    }
    return 0;
  }, [cart]);

  return (
    <button className="flex flex-1 my-4" onClick={onClick}>
      <div className="flex flex-col text-left flex-auto">
        <h3 className="flex items-center text-base font-medium">
          {!!itemCount && (
            <span className="flex justify-center items-center bg-[--primary-color] text-white text-sm w-[1.125rem] h-[1.125rem] rounded mr-1">
              {itemCount}
            </span>
          )}
          {item.name}
        </h3>
        <p className="text-base font-light line-clamp-2 leading-longText lg:line-clamp-1 max-w-[85%]">
          {item.description}
        </p>
        <span className="text-base font-medium">
          {currency}
          {getFormattedMonetaryValue(item.price)}
        </span>
      </div>
      <div className="relative flex rounded-[4px] overflow-hidden min-w-[128px] h-[85px]">
        {!!item.images?.length && (
          <Image
            src={item.images[0].image}
            alt={item.name}
            fill
            sizes="128px"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </button>
  );
};
