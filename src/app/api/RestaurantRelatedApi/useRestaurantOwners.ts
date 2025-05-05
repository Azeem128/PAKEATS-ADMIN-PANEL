import { useState, useEffect } from "react";
import { getAllRestaurantOwners } from "./owner";

interface RestaurantOwner {
  restaurantownerid: string;
  name: string;
  phone: string | null;
  email: string;
  createdat: string;
}

interface UseReadRestaurantOwnersResult {
  data: RestaurantOwner[] | null;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useReadRestaurantOwners = (): UseReadRestaurantOwnersResult => {
  const [data, setData] = useState<RestaurantOwner[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchOwners = async () => {
      try {
        setIsLoading(true);
        const response = await getAllRestaurantOwners();
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

    fetchOwners();
  }, []);

  return { data, isLoading, isError, error };
};