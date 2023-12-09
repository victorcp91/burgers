import { IActionButtonProps } from "./ActionButton.types";

export const ActionButton = ({
  label,
  disabled,
  ...props
}: IActionButtonProps) => {
  return (
    <button
      {...props}
      className={`text-white w-full rounded-full py-2 text-lg font-medium ${
        disabled ? "bg-bodyBackground" : "bg-[--primary-color]"
      } hover:bg-[--primary-color-hover] ${props.className}`}
    >
      {label}
    </button>
  );
};
