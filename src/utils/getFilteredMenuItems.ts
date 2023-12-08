import { IMenuItem, IMenuSection } from "@/types";

export const getFilteredMenuItems = (
  menu: IMenuSection[],
  searchString: string
): IMenuItem[] | false => {
  const filteredItems: IMenuItem[] = [];
  const search = searchString.toLowerCase();
  menu.forEach((section) => {
    filteredItems.push(
      ...section.items.filter(
        (i) =>
          i.name.toLowerCase().includes(search) ||
          i.description?.toLowerCase().includes(search)
      )
    );
  });
  return filteredItems;
};
