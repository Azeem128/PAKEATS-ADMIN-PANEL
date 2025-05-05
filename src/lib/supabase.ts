import {supabase} from "./supabaseClient"

export const getUsers = async () => {
    const { data, error } = await supabase.from('riders').select('*');
    if (error) {
      console.error('Error fetching users:', error);
    }
    return data;
  };
  