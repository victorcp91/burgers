import { ICartItem } from "@/types/cart";
import { generateUniqueId } from "..";

const item1 = {
  id: 1625702,
  modifiers: [
    {
      id: 1101202,
      items: [
        {
          id: 7476054,
        },
        {
          id: 7476055,
        },
      ],
    },
  ],
};

const item2 = {
  id: 1625702,
  modifiers: [
    {
      id: 1101202,
      items: [
        {
          id: 7476055,
        },
      ],
    },
  ],
};

describe("generateUniqueId", () => {
  it("should generate uniqueCode based on item ids", () => {
    const generatedCode = generateUniqueId(item1 as unknown as ICartItem);
    expect(generatedCode).toBe("162570274760547476055");
  });
  it("should generate diferent codes for same item with different modifications", () => {
    const generatedCode1 = generateUniqueId(item1 as unknown as ICartItem);
    const generatedCode2 = generateUniqueId(item2 as unknown as ICartItem);
    expect(generatedCode1).not.toBe(generatedCode2);
  });
});
