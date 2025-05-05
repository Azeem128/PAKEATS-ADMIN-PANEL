
// "use client";

// import { useRouter, useParams } from "next/navigation";
// import { toast } from "react-toastify";
// import CustomerForm from "../../components/CustomerForm";
// import { useCustomerContext } from "@/providers/CustomerProvider";
// import { supabase } from "@/lib/supabaseClient";

// const CustomerEditPage = () => {
//   const { customerData } = useCustomerContext();
//   const { id } = useParams();
//   const router = useRouter();

//   if (!customerData) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <p className="text-lg text-gray-600">No customer data available.</p>
//       </div>
//     );
//   }

//   const handleUpdate = async (updatedData: any) => {
//     const { error } = await supabase
//       .from("Customers")
//       .update({
//         Name: updatedData.name,
//         Email: updatedData.email,
//         Phone: updatedData.phone || null,
//         Image: updatedData.image || null,
//         UpdatedAt: new Date().toISOString(),
//       })
//       .eq("CustomerId", id);

//     if (error) {
//       toast.error("Failed to update customer: " + error.message);
//     } else {
//       toast.success("Customer updated successfully");
//       router.push("/customers");
//     }
//   };

//   return (
//     <div className="p-6">
//       <CustomerForm
//         initialData={{
//           customerid: customerData.customerid,
//           name: customerData.name,
//           email: customerData.email,
//           phone: customerData.phone || "",
//           image: customerData.image || "",
//         }}
//         onSubmit={handleUpdate}
//       />
//     </div>
//   );
// };

// export default CustomerEditPage;

"use client";

import { useRouter, useParams } from "next/navigation";
import { toast } from "react-toastify";
import CustomerForm from "../../components/CustomerForm";
import { useCustomerContext } from "@/providers/CustomerProvider";
import { supabase } from "@/lib/supabaseClient";

const CustomerEditPage = () => {
  const { customerData } = useCustomerContext();
  const { id } = useParams();
  const router = useRouter();

  if (!customerData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-600">No customer data available.</p>
      </div>
    );
  }

  const handleUpdate = async (updatedData: { name: string; email: string; phone: string; image: string }) => {
    const { error } = await supabase
      .from("Customers")
      .update({
        name: updatedData.name,
        email: updatedData.email,
        phone: updatedData.phone || null,
        image: updatedData.image || null,
        updatedat: new Date().toISOString(),
      })
      .eq("CustomerId", id);

    if (error) {
      toast.error("Failed to update customer: " + error.message);
    } else {
      toast.success("Customer updated successfully");
      router.push("/customers");
    }
  };

  return (
    <div className="p-6">
      <CustomerForm
        customer={{
          customerid: customerData.customerid,
          name: customerData.name,
          email: customerData.email,
          phone: customerData.phone || "",
          image: customerData.image || "",
        }}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default CustomerEditPage;