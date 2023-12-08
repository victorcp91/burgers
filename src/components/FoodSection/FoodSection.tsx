import { useReducer, useState } from "react";
import Image from "next/image";
import { arrowUpIcon } from "@/assets/icons";
import MenuItem from "../MenuItem";
import { IFoodSectionProps } from "./FoodSectionTypes";

export const FoodSection = ({ section }: IFoodSectionProps) => {
  const [opened, toggleOpened] = useReducer((current) => !current, true);

  return (
    <>
      <div className="mt-5 flex justify-between items-center">
        <h2 id={section.name} className="text-2xl font-medium ">
          {section.name}
        </h2>
        <button
          className={`flex justify-center items-center w-6 h-6 ${
            opened ? "rotate-0" : "rotate-180"
          }`}
          onClick={toggleOpened}
        >
          <Image
            src={arrowUpIcon}
            width={18}
            height={10}
            alt="close"
            style={{ height: "auto" }}
          />
        </button>
      </div>
      <ul
        className={`flex flex-col overflow-hidden ${
          opened ? "max-h-[1000px]" : "max-h-0"
        } transition-heightHide`}
      >
        {section.items.map((item) => (
          <li key={item.id} className="flex">
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
