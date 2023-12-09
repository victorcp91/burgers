import { IMenuItem, IMenuSection } from "@/types";

export interface IFoodSectionProps {
  section: IMenuSection;
  onSelect: (item: IMenuItem) => void;
}
