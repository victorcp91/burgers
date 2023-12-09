import { useContext } from "react";
import Image from "next/image";
import { IMenuItemProps } from "./MenuItem.types";
import { RestaurantContext } from "@/contexts/Restaurant";
import { getFormattedMonetaryValue } from "@/utils";

export const MenuItem = ({ item, onClick }: IMenuItemProps) => {
  const { currency } = useContext(RestaurantContext);
  return (
    <button className="flex flex-1 my-4" onClick={onClick}>
      <div className="flex flex-col text-left flex-auto">
        <h3 className="text-base font-medium">{item.name}</h3>
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
            style={{ objectFit: "cover" }}
          />
        )}
      </div>
    </button>
  );
};
