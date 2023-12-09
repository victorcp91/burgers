export const RestaurantInitialData = {
  id: 7602,
  name: "BURGERS RESTAURANT",
  internalName: "BURGERS RESTAURANT",
  webSettings: {
    backgroundColour: "#ffffff",
    primaryColour: "#4f372f",
    primaryColourHover: "#4f372f",
    navBackgroundColour: "#4f372f",
  },
  currency: "R$",
};

export const emptyCartData = {
  cart: [],
  addToCart: () => {},
  updateItem: () => {},
  removeItem: () => {},
};

export const cartWithItems = {
  cart: [
    {
      id: 1625701,
      name: "Hard Core",
      description:
        "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
      alcoholic: 0,
      price: 33,
      position: 0,
      visible: 1,
      availabilityType: "AVAILABLE_NOW",
      sku: "I1625701",
      images: [
        {
          id: 108305,
          image:
            "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
        },
      ],
      available: true,
      uniqueId: "1625701",
      qty: 3,
    },
  ],
  addToCart: () => {},
  updateItem: () => {},
  removeItem: () => {},
};

export const ComplexCartTotal = "R$335,00";
export const complexCart = [
  {
    id: 1625701,
    name: "Hard Core",
    description:
      "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
    alcoholic: 0,
    price: 33,
    position: 0,
    visible: 1,
    availabilityType: "AVAILABLE_NOW",
    sku: "I1625701",
    images: [
      {
        id: 108305,
        image:
          "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
      },
    ],
    available: true,
    uniqueId: "1625701",
    qty: 3,
  },
  {
    id: 1625702,
    name: "Smash Brooks",
    description:
      "100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.",
    alcoholic: 0,
    price: 0,
    position: 1000,
    visible: 1,
    availabilityType: "AVAILABLE_NOW",
    sku: "I1625702",
    modifiers: [
      {
        id: 1101202,
        name: "Choose a size",
        minChoices: 1,
        maxChoices: 1,
        items: [
          {
            id: 7476055,
            name: "2 meats",
            price: 35,
            maxChoices: 1,
            position: 1000,
            visible: 1,
            availabilityType: "AVAILABLE_NOW",
            available: true,
          },
        ],
      },
    ],
    images: [
      {
        id: 108307,
        image:
          "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbe01b3373.png",
      },
    ],
    available: true,
    uniqueId: "16257027476055",
    qty: 4,
  },
  {
    id: 1625705,
    name: "Caipirinha",
    alcoholic: 0,
    price: 13,
    position: 0,
    visible: 1,
    availabilityType: "AVAILABLE_NOW",
    sku: "I1625705",
    available: true,
    uniqueId: "1625705",
    qty: 2,
  },
  {
    id: 1004122,
    name: "Smirnoff",
    alcoholic: 0,
    price: 10,
    position: 2000,
    availabilityType: "AVAILABLE_NOW",
    sku: "I1004122",
    available: true,
    uniqueId: "1004122",
    qty: 7,
  },
];

export const complexCartData = {
  cart: complexCart,
  addToCart: () => {},
  updateItem: () => {},
  removeItem: () => {},
};
