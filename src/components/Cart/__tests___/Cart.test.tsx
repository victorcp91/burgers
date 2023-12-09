import "@testing-library/jest-dom";
import Cart from "..";
import { render, waitFor } from "@testing-library/react";
import { CartContext } from "@/contexts/Cart";
import { RestaurantContext } from "@/contexts/Restaurant";
import { IRestaurant, IWebSettings } from "@/types";
import {
  ComplexCartTotal,
  RestaurantInitialData,
  cartWithItems,
  complexCartData,
  emptyCartData,
} from "./mocks";

describe("Cart", () => {
  it("should show cart empty message when cart is empty", () => {
    const { currency, webSettings } = RestaurantInitialData;
    const screen = render(
      <RestaurantContext.Provider
        value={{
          currency,
          restaurant: RestaurantInitialData as IRestaurant,
          webSettings: webSettings as IWebSettings,
          setRestaurant: () => {},
        }}
      >
        <CartContext.Provider value={emptyCartData}>
          <Cart openedMobile={false} onClose={() => {}} />
        </CartContext.Provider>
      </RestaurantContext.Provider>
    );
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("should show checkout button if cart has items", () => {
    const { currency, webSettings } = RestaurantInitialData;
    const screen = render(
      <RestaurantContext.Provider
        value={{
          currency,
          restaurant: RestaurantInitialData as IRestaurant,
          webSettings: webSettings as IWebSettings,
          setRestaurant: () => {},
        }}
      >
        <CartContext.Provider value={cartWithItems}>
          <Cart openedMobile={false} onClose={() => {}} />
        </CartContext.Provider>
      </RestaurantContext.Provider>
    );
    expect(screen.getByText("Checkout now")).toBeInTheDocument();
  });

  it("should calculate and show cart total value", () => {
    const { currency, webSettings } = RestaurantInitialData;
    const screen = render(
      <RestaurantContext.Provider
        value={{
          currency,
          restaurant: RestaurantInitialData as IRestaurant,
          webSettings: webSettings as IWebSettings,
          setRestaurant: () => {},
        }}
      >
        <CartContext.Provider value={complexCartData}>
          <Cart openedMobile={false} onClose={() => {}} />
        </CartContext.Provider>
      </RestaurantContext.Provider>
    );
    expect(screen.getAllByText(ComplexCartTotal)).toHaveLength(2);
  });
});
