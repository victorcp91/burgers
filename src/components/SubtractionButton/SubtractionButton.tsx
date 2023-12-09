import { useContext } from "react";
import { RestaurantContext } from "@/contexts/Restaurant";
import { ISubtractionButtonProps } from "./SubtractionButton.types";

export const SubtractionButton = ({
  size,
  disabled,
  ...props
}: ISubtractionButtonProps) => {
  const {
    webSettings: { primaryColour },
  } = useContext(RestaurantContext);

  return (
    <button {...props}>
      <svg
        width={size || "20"}
        height={size || "20"}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
          fill={disabled ? "#DADADA" : primaryColour}
          stroke={disabled ? "#DADADA" : primaryColour}
          strokeWidth="2"
        />
        <rect
          x="4"
          y="8.5"
          width="12"
          height="3"
          rx="1.5"
          fill={disabled ? primaryColour : "white"}
        />
      </svg>
    </button>
  );
};
