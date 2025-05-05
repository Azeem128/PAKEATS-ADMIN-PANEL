import { supabase } from "../../lib/supabaseClient";

export async function getAllCustomers() {
    try {
      const { data, error } = await supabase
        .from("customers")
        .select("*") // Fetch all columns
  
      if (error) {
        throw error;
      }
      console.log(data);
  
      return { data, error: null };
    } catch (error: any) {
      console.error("Error fetching customers:", error.message);
      return { data: null, error: error.message };
    }
  }

  export async function getCustomerById(id: string) {
    const { data, error } = await supabase
      .from("customers")
      .select("*")
      .eq("customerid", id)
      .single();
  
    return { data, error };
  }

  export async function updateCustomer(customerId: string, updates: any) {
    const { data, error } = await supabase
      .from("customers")
      .update(updates)
      .eq("customerid", customerId)
      .select()
      .single();

      console.log(data);
  
    return { data, error };
  }
  