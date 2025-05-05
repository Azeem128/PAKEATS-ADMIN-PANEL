import { supabase } from "@/lib/supabaseClient";
import { useQuery } from "@tanstack/react-query";



export const useReadCustomers = () => {
  
    return useQuery({
      queryKey: ["customers"],
      queryFn: async () => {
        const { data, error } = await supabase
          .from("customers")
          .select('*')
          .order("createdat", { ascending: false });
  
        if (error) {
          throw new Error(error.message);
        }
  
        console.log("customers hain ye ", data);
  
        return data;
      },
    });
  };
  