import { useState, useEffect } from "react";
import { getAllRestaurants } from "./restaurant";

interface RestaurantItem {
  itemid: string;
  restaurantid: string;
  itemname: string;
  itemdescription: string | null;
  baseprice: number;
  discount: number | null;
  rating: number;
  createdat: string;
  updatedat: string;
  // itemsImage: string | null; // Commented out as per request
  // itemImages: string | null; // Commented out as per request
}

interface RestaurantDeal {
  dealid: string;
  restaurantid: string;
  dealname: string;
  dealdescription: string | null;
  baseprice: number;
  discountpercentage: number | null;
  startdate: string | null;
  enddate: string | null;
  rating: number;
  createdat: string;
  updatedat: string;
  dealitems: { dealitemid: string; itemid: string; item?: RestaurantItem }[];
}

interface Restaurant {
  restaurantid: string;
  restaurantownerid: string;
  restaurantname: string;
  restaurantlocation: string;
  starttiming: string | null;
  endtiming: string | null;
  rating: number;
  createdat: string;
  updatedat: string;
  restaurantdeals: RestaurantDeal[];
  restaurantitems: RestaurantItem[];
}

interface UseReadRestaurantsResult {
  data: Restaurant[] | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useReadRestaurants = (): UseReadRestaurantsResult => {
  const [data, setData] = useState<Restaurant[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setIsLoading(true);
        const response = await getAllRestaurants();
        if (response.error) {
          throw new Error(response.error);
        }
        setData(response.data);
      } catch (err) {
        setIsError(true);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { data, isLoading, isError, error };
};