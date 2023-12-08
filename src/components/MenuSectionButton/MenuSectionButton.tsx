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

  const {
    webSettings: { primaryColour },
  } = useContext(RestaurantContext);

  return (
    <a
      className={`border-b-2 p-2 text-center`}
      style={{
        borderColor: active ? primaryColour : "transparent",
      }}
      href={`#${name}`}
      onClick={selectSection}
    >
      <div
        className="relative h-[82px] w-[82px]"
        style={{ borderColor: primaryColour }}
      >
        {active && (
          <span
            className="absolute h-[90px] w-[90px] rounded-full border-2 top-[-4px] left-[-4px]"
            style={{ borderColor: primaryColour }}
          />
        )}
        <Image
          src={src}
          alt={name}
          fill
          sizes="82px"
          className="object-cover h-auto w-auto rounded-full overflow-hidden"
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
