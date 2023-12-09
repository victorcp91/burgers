import { IMenuSection } from "@/types";

const getAvailableOrderedMenu = (sections: IMenuSection[]) => {
  sections = sections.sort((a, b) => a.position - b.position);
  sections.forEach((section, sectionIndex) => {
    sections[sectionIndex].items = section.items
      .filter((item) => item.available)
      .sort((a, b) => a.position - b.position);
    section.items.forEach((item, itemIndex) => {
      if (item.modifiers?.length) {
        item.modifiers.forEach((modifier, modifierIndex) => {
          sections[sectionIndex].items[itemIndex].modifiers![
            modifierIndex
          ].items = modifier.items
            .filter((modifierItem) => modifierItem.available)
            .sort((a, b) => a.position - b.position);
        });
      }
    });
  });
  return sections;
};

export default getAvailableOrderedMenu;
