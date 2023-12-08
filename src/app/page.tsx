import FoodMenu from "@/components/FoodMenu";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RestaurantProvider from "@/contexts/Restaurant";
import { getRestaurantDetails } from "@/services";
import { IRestaurant } from "@/types";

export default async function Home() {
  const {
    name,
    webSettings: { bannerImage, backgroundColour },
  }: IRestaurant = await getRestaurantDetails();

  const restaurant = await getRestaurantDetails();

  return (
    <main className="flex flex-col max-w-full box-border">
      <Header imageSrc={bannerImage} alt={name} />
      <RestaurantProvider initialValue={restaurant}>
        <FoodMenu />
      </RestaurantProvider>
      <Footer linkColor={backgroundColour || "#fff"} />
    </main>
  );
}
