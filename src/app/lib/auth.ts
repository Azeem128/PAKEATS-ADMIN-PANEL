import { supabase } from "./supabaseClient";

// Admin Login Function
export const loginAdmin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

// Admin Signup Function
export const signupAdmin = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

// Admin Logout Function
export const logoutAdmin = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
