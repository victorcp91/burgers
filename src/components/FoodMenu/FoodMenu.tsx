"use client";

import { useEffect, useMemo, useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { getRestaurantMenu } from "@/services/restaurantMenu";
import { IMenuItem, IMenuSection } from "@/types";
import MenuSectionButton from "../MenuSectionButton";
import { FoodSection } from "../FoodSection/FoodSection";
import { getFilteredMenuItems } from "@/utils";
import MenuItem from "../MenuItem";

export const FoodMenu = () => {
  const [searchString, setSearchString] = useState("");
  const [menu, setMenu] = useState<IMenuSection[]>([]);
  const [currentSection, setCurrentSection] = useState<number>();
  const [userIsTyping, setUserIsTyping] = useState(false);

  useEffect(() => {
    const getMenu = async () => {
      try {
        const menuData = await getRestaurantMenu();
        setMenu(menuData);
        if (menuData.length) {
          setCurrentSection(menuData[0].id);
        }
      } catch (err) {
        console.error(err);
      } finally {
      }
    };
    getMenu();
  }, []);

  const filteredItems = useMemo(
    () => (searchString ? getFilteredMenuItems(menu, searchString) : false),
    [menu, searchString]
  );

  return (
    <div className="flex flex-col m-4">
      <SearchInput
        value={searchString}
        change={setSearchString}
        onChangeTyping={setUserIsTyping}
        placeholder="Search menu items"
      />
      <div className={`${userIsTyping && "animate-pulse"}`}>
        {filteredItems ? (
          filteredItems.map((item) => <MenuItem key={item.id} item={item} />)
        ) : (
          <>
            <nav className={`flex justify-between my-4`}>
              {menu.map((section) => (
                <MenuSectionButton
                  key={section.id}
                  id={section.id}
                  name={section.name}
                  src={section.images[0]?.image || ""}
                  active={currentSection === section.id}
                  setSection={setCurrentSection}
                />
              ))}
            </nav>
            {menu.map((section) => (
              <FoodSection key={section.id} section={section} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
