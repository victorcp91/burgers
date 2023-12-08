import Image from "next/image";
import { IMenuSectionProps } from "./MenuSectionButton.type";
import { RestaurantContext } from "@/contexts/Restaurant";
import { useContext } from "react";

export const MenuSectionButton = ({
  id,
  src,
  name,
  active,
  setSection,
}: IMenuSectionProps) => {
  const selectSection = () => {
    setSection(id);
  };

  const { webSettings } = useContext(RestaurantContext);

  return (
    <a
      className={`border-b-2 p-2 text-center`}
      style={{
        borderColor: active ? webSettings.primaryColour : "transparent",
      }}
      href={`#${name}`}
      onClick={selectSection}
    >
      <div className="relative h-[82px] w-[82px] rounded-full overflow-hidden">
        <Image
          src={src}
          alt={name}
          fill
          sizes="82px"
          className="object-cover h-auto w-auto"
        />
      </div>
      <label
        className={`block px-0 pt-4 pb-2 my-4 mb-2 ${
          active ? "font-semibold" : "font-normal"
        } text-base`}
      >
        {name}
      </label>
    </a>
  );
};
