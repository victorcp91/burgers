import { useContext } from "react";
import ActionButton from "../ActionButton";
import { Link } from "../Link/Link";
import { CartContext } from "@/contexts/Cart";
import { RestaurantContext } from "@/contexts/Restaurant";
import { getFormattedMonetaryValue } from "@/utils";

export const Footer = () => {
  const { cart } = useContext(CartContext);
  return (
    <footer className="pb-2 bg-secondaryBackground w-full max-w-5xl m-auto">
      <Link href="" label="View allergy information" />
    </footer>
  );
};
