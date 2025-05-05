// import CustomerForm from "../../components/CustomerForm";

// const AddCustomerPage = () => {
//   return (
//     <div className="p-6">
//       <CustomerForm />
//     </div>
//   );
// };

// export default AddCustomerPage;
"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import CustomerForm from "../../components/CustomerForm";
import { supabase } from "@/lib/supabaseClient";

const AddCustomerPage = () => {
  const router = useRouter();

  const handleAddCustomer = async (formData: { name: string; email: string; phone: string; image: string }) => {
    const { name, email, phone, image } = formData;

    // Generate a new customer ID
    const customerId = crypto.randomUUID();

    // Insert the new customer into Supabase
    const { error } = await supabase.from("Customers").insert({
      CustomerId: customerId,
      name: name,
      email: email,
      phone: phone || null,
      image: image || null,
      createdat: new Date().toISOString(),
      noOfOrders: 0,
      lastOrder: null,
      completedOrders: 0,
      cancelledOrders: 0,
      location: null,
      totalSpent: 0,
    });

    if (error) {
      toast.error("Failed to add customer: " + error.message);
    } else {
      toast.success("Customer added successfully!");
      router.push("/customers");
    }
  };

  return (
    <div className="p-6">
      <CustomerForm
        customer={{
          customerid: "",
          name: "",
          email: "",
          phone: "",
          image: "",
        }}
        onSubmit={handleAddCustomer}
      />
    </div>
  );
};

export default AddCustomerPage;