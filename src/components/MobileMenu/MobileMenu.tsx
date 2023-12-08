import Image from "next/image";
import { hamburgerMenuIcon } from "@/assets/icons";

export const MobileMenu = () => {
  return (
    <button className="absolute right-5 w-7 h-7 flex justify-center align-middle">
      <Image
        src={hamburgerMenuIcon}
        alt="Menu"
        className="h-full"
        width={16}
        height={28}
      />
    </button>
  );
};
