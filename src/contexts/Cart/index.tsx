"use client";

import React, { createContext, useEffect, useReducer } from "react";
import { IMenuItem } from "@/types";
import { generateUniqueId } from "@/utils";
import { ICartItem } from "@/types/cart";
import { CartActionKind } from "./Cart.enums";
import { CartAction, ICartContextType, ProviderProps } from "./Cart.types";
import { useStorageCart } from "@/hooks";

export const CartContext = createContext<ICartContextType>(
  {} as ICartContextType
);

const cartReducer = (state: ICartItem[], action: CartAction): ICartItem[] => {
  const { type, payload } = action;
  switch (type) {
    case CartActionKind.LOAD:
      if (payload.initialData) {
        return payload.initialData;
      }
    case CartActionKind.ADD:
      if (payload.item) {
        const updatedState = [...state];
        updatedState.push(payload.item);
        payload.saveCart(updatedState);
        return updatedState;
      }
    case CartActionKind.REMOVE:
      const updatedCart = state.filter(
        (item) => item.uniqueId !== payload.uniqueId
      );
      payload.saveCart(updatedCart);
      return updatedCart;
    case CartActionKind.UPDATE:
      if (payload.item) {
        const currentState = [...state];
        const stateIndex = currentState.findIndex(
          (item: IMenuItem) => item.id === payload.item!.id
        );
        currentState[stateIndex] = payload.item;
        payload.saveCart(currentState);
        return currentState;
      }
    default:
      return state;
  }
};

const CartProvider = ({ children }: ProviderProps) => {
  const { storageCart, saveCart } = useStorageCart();
  const [currentCart, dispatchCart] = useReducer(cartReducer, []);

  useEffect(() => {
    if (!currentCart.length && storageCart) {
      dispatchCart({
        type: CartActionKind.LOAD,
        payload: { initialData: storageCart, saveCart },
      });
    }
  }, [storageCart]);

  const addToCart = (item: IMenuItem, qty: number) => {
    const uniqueId = generateUniqueId(item);
    const existingItem = currentCart.find((i) => i.uniqueId === uniqueId);
    if (existingItem) {
      dispatchCart({
        type: CartActionKind.UPDATE,
        payload: {
          item: { ...item, uniqueId, qty: existingItem.qty + qty },
          saveCart,
        },
      });
    } else {
      dispatchCart({
        type: CartActionKind.ADD,
        payload: { item: { ...item, uniqueId, qty }, saveCart },
      });
    }
  };

  const updateItem = (uniqueId: string, qty: number) => {
    const existingItem = currentCart.find((i) => i.uniqueId === uniqueId);
    if (existingItem) {
      dispatchCart({
        type: CartActionKind.UPDATE,
        payload: { item: { ...existingItem, uniqueId, qty }, saveCart },
      });
    }
  };

  const removeItem = async (uniqueId: string) => {
    dispatchCart({
      type: CartActionKind.REMOVE,
      payload: { uniqueId, saveCart },
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: currentCart,
        addToCart,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
