import { useContext, useEffect, useMemo } from "react";
import CartItem from "./components/CartItem";
import CloseButton from "../CloseButton";
import { CartContext } from "@/contexts/Cart";
import { ICartProps } from "./Cart.types";
import ActionButton from "../ActionButton";

export const Cart = ({ openedMobile, onClose }: ICartProps) => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (openedMobile) {
      document.body.style.position = "fixed";
    }
    return () => {
      document.body.style.position = "";
    };
  }, [openedMobile]);

  const total = useMemo(() => {
    let sum = 0;
    cart.forEach((item) => {
      const modifiers = item.modifiers;
      if (item.modifiers?.length) {
        let modifierSum = 0;
        modifiers?.forEach((modifier) => {
          modifierSum += modifier.items.reduce((acc, i) => acc + i.price, 0);
        });
        sum += modifierSum * item.qty;
      } else {
        sum += item.price * item.qty;
      }
    });
    return sum;
  }, [cart]);

  return (
    <div
      className={`${
        openedMobile ? "fixed" : "hidden"
      } top-0 left-0 w-screen h-screen overflow-y-auto bg-secondaryBackground lg:block lg:relative lg:shadow-cards lg:h-fit lg:max-w-xs`}
    >
      <div className="flex h-16 w-full justify-center items-center bg-white border-b-[1px] border-b-itemSeparator lg:bg-transparent">
        <h4 className="text-lg font-medium">Cart</h4>
        <CloseButton
          size={14}
          className="absolute right-4 lg:hidden"
          onClick={onClose}
        />
      </div>
      {cart.length ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.uniqueId} item={item} />
          ))}
          <div className="flex justify-between mx-4 py-4 border-b-2 border-b-headerSeparator">
            <span className="block">Subtotal</span>
            <span className="block font-medium ">R${total}</span>
          </div>
          <div className="flex justify-between mx-4 py-4">
            <span className="block text-2xl font-light">Total:</span>
            <span className="block text-2xl font-bold ">R${total}</span>
          </div>
        </>
      ) : (
        <p className="bg-white p-4">Your cart is empty</p>
      )}
      <div className="absolute w-full p-4 bottom-4 lg:hidden">
        <ActionButton label="Checkout now" />
      </div>
    </div>
  );
};
