"use client";

import { IRestaurant, IWebSettings } from "@/types";
import React, { useState, createContext, useEffect } from "react";

export interface IRestaurantContextType {
  restaurant: IRestaurant;
  webSettings: IWebSettings;
  currency: string;
  setRestaurant: (r: IRestaurant) => void;
}

export const RestaurantContext = createContext<IRestaurantContextType>(
  {} as IRestaurantContextType
);

interface Props {
  children: JSX.Element;
  initialValue: IRestaurant;
}

const RestaurantProvider = ({ children, initialValue }: Props) => {
  const [currentRestaurant, setCurrentRestaurant] =
    useState<IRestaurant>(initialValue);

  useEffect(() => {
    if (
      (initialValue &&
        document.documentElement &&
        !document.documentElement.style.getPropertyValue("--primary-color")) ||
      !document.documentElement.style.getPropertyValue("--primary-color-hover")
    ) {
      document.documentElement.style.setProperty(
        "--primary-color",
        initialValue.webSettings.primaryColour
      );
      document.documentElement.style.setProperty(
        "--primary-color-hover",
        initialValue.webSettings.primaryColourHover
      );
    }
  }, [initialValue]);

  const setRestaurant = (r: IRestaurant) => {
    setCurrentRestaurant(r);
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurant: currentRestaurant,
        webSettings: currentRestaurant.webSettings,
        currency: currentRestaurant.currency,
        setRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantProvider;
