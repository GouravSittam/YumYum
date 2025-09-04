import { useEffect, useState } from "react";

/**
 * Types for restaurant menu API response.
 */
export interface RestaurantMenuData {
  id: string;
  name: string;
  categories: MenuCategory[];
  info: RestaurantInfo;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  imageUrl?: string;
}

export interface RestaurantInfo {
  address: string;
  rating: number;
  cuisine: string[];
  imageUrl?: string;
}

/**
 * Custom hook to fetch restaurant menu data.
 * @param resId Restaurant ID
 * @returns RestaurantMenuData | null
 */
const useRestrauntMenu = (resId: string): RestaurantMenuData | null => {
  const [resInfo, setResInfo] = useState<RestaurantMenuData | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const data = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=${resId}`
        );
        const json = await data.json();
        // TODO: Map json to RestaurantMenuData structure as needed
        setResInfo(json as RestaurantMenuData);
      } catch (error) {
        setResInfo(null);
      }
    };
    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestrauntMenu;
