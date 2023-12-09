import { CartContext } from "@/contexts/Cart";
import { RestaurantContext } from "@/contexts/Restaurant";
import { ICartItem } from "@/types/cart";
import { useContext, useEffect, useState } from "react";

const useStorageCart = () => {
  const [storageCart, setStorageCart] = useState<ICartItem[] | null>();
  const { restaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const loadCart = async () => {
      const loadedCart = localStorage.getItem(`cart${restaurant.id}`);
      if (loadedCart) {
        setStorageCart(JSON.parse(loadedCart));
      }
    };
    void loadCart();
  }, []);

  const saveCart = (cart: ICartItem[]) => {
    localStorage.setItem(`cart${restaurant.id}`, JSON.stringify(cart));
  };

  return { storageCart, saveCart };
};

export default useStorageCart;
