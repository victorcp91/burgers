import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getRestaurantDetails } from "@/services";
import { IRestaurant } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const restaurant: IRestaurant = await getRestaurantDetails();

  return (
    <html lang={restaurant.locale} className="scroll-smooth">
      <head>
        <title>{restaurant.name}</title>
        <meta
          name="description"
          content={restaurant.description || restaurant.internalName}
        />
        <meta
          property="og:title"
          content={restaurant.description || restaurant.internalName}
        />
      </head>
      <body>
        <>
          <Navbar
            backgroundColor={restaurant.webSettings.navBackgroundColour}
          />
          {children}
        </>
      </body>
    </html>
  );
}
