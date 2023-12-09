import { IMenuItem } from "@/types";

export interface IMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  item: IMenuItem;
}
