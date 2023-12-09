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
    <html
      lang={restaurant.locale}
      className="max-w-full scroll-smooth bg-bodyBackground"
    >
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="w-screen overflow-x-hidden">
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
