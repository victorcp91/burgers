import { useContext } from "react";
import { RestaurantContext } from "@/contexts/Restaurant";
import { IPlusButtonProps } from "./PlusButton.types";

export const PlusButton = ({ size, disabled, ...props }: IPlusButtonProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
          fill={disabled ? "#DADADA" : primaryColour}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.1429 10.8572H10.8571V15.1429C10.8571 15.6143 10.4714 16 10 16C9.52857 16 9.14286 15.6143 9.14286 15.1429V10.8572H4.85714C4.38571 10.8572 4 10.4715 4 10C4 9.5286 4.38571 9.14289 4.85714 9.14289H9.14286V4.85717C9.14286 4.38574 9.52857 4.00003 10 4.00003C10.4714 4.00003 10.8571 4.38574 10.8571 4.85717V9.14289H15.1429C15.6143 9.14289 16 9.5286 16 10C16 10.4715 15.6143 10.8572 15.1429 10.8572Z"
          fill={disabled ? primaryColour : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8891 11.1428L11.1429 11.1429V14.8541C11.1429 15.4826 10.6286 15.9969 10.0001 15.9969C9.3715 15.9969 8.85721 15.4826 8.85721 14.8541V11.1429H5.1453C4.51673 11.1429 4.00244 10.6286 4.00244 10C4.00244 9.37143 4.51673 8.85715 5.1453 8.85715H8.85721V5.15558C8.85721 4.52701 9.3715 4.01273 10.0001 4.01273C10.6286 4.01273 11.1429 4.52701 11.1429 5.15558V8.85715L14.8891 8.85705C15.5177 8.85705 16.032 9.37133 16.032 9.9999C16.032 10.6285 15.5177 11.1428 14.8891 11.1428Z"
          fill={disabled ? primaryColour : "white"}
        />
      </svg>
    </button>
  );
};
