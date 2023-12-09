"use client";

import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { getRestaurantMenu } from "@/services/restaurantMenu";
import { IMenuItem, IMenuSection } from "@/types";
import MenuSectionButton from "../MenuSectionButton";
import { FoodSection } from "../FoodSection/FoodSection";
import { getFilteredMenuItems, getAvailableOrderedMenu } from "@/utils";
import MenuItem from "../MenuItem";
import Cart from "../Cart";
import ItemDetails from "../ItemDetails";
import Footer from "../Footer";
import { CartContext } from "@/contexts/Cart";
import ActionButton from "../ActionButton";

export const FoodMenu = () => {
  const { cart } = useContext(CartContext);
  const [searchString, setSearchString] = useState("");
  const [menu, setMenu] = useState<IMenuSection[]>([]);
  const [currentSection, setCurrentSection] = useState<number>();
  const [userIsTyping, setUserIsTyping] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IMenuItem | null>(null);
  const [mobileCart, toggleMobileCart] = useReducer(
    (current) => !current,
    false
  );

  useEffect(() => {
    const getMenu = async () => {
      try {
        const menuData = await getRestaurantMenu();
        setMenu(getAvailableOrderedMenu(menuData));
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
    <>
      <div className="max-w-5xl m-auto p-4 w-full lg:p-0 lg:pt-4 bg-white lg:bg-transparent">
        <SearchInput
          value={searchString}
          change={setSearchString}
          onChangeTyping={setUserIsTyping}
          placeholder="Search menu items"
        />
        <div className="flex flex-col mt-2 bg-secondaryBackground lg:p-8 lg:flex-row lg:gap-4">
          <div
            className={`${
              userIsTyping && "animate-pulse"
            } bg-white lg:p-4 lg:shadow-cards flex-1`}
          >
            {filteredItems ? (
              filteredItems.length ? (
                filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))
              ) : (
                <p>No items found</p>
              )
            ) : (
              <>
                <nav
                  className={`flex justify-between my-4 lg:justify-start lg:gap-6`}
                >
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
                  <FoodSection
                    key={section.id}
                    section={section}
                    onSelect={setSelectedItem}
                  />
                ))}
              </>
            )}
          </div>
          <Cart openedMobile={mobileCart} onClose={toggleMobileCart} />
          {selectedItem && (
            <ItemDetails
              item={selectedItem}
              onClose={() => setSelectedItem(null)}
            />
          )}
        </div>
      </div>
      <Footer />
      <div className="pb-10 p-4 bg-secondaryBackground w-full max-w-5xl m-auto lg:hidden ">
        {!!cart.length && (
          <ActionButton
            label={`Your basket • ${cart.length} item${
              cart.length > 1 ? "s" : ""
            }`}
            onClick={toggleMobileCart}
          />
        )}
      </div>
    </>
  );
};
