
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

type Order = {
  orderid: string;
  customers: { name: string };
  restaurants: { restaurantname: string };
  status: string;
  totalamount: number;
  paymentmethod: string;
  createdat: string;
  riderid?: string;
};

type Rider = {
  RiderId: string;
  Name: string;
};

type OrderDetailsModalProps = {
  order: Order | null;
  closeModal: () => void;
};

export default function OrderDetailsModal({ order, closeModal }: OrderDetailsModalProps) {
  const [rider, setRider] = useState<Rider | null>(null);
  const [loadingRider, setLoadingRider] = useState(false);

  useEffect(() => {
    const fetchRider = async () => {
      if (order?.status.toLowerCase() === "delivered" && order?.riderid) {
        setLoadingRider(true);
        const { data, error } = await supabase
          .from("Riders")
          .select("RiderId, Name")
          .eq("RiderId", order.riderid)
          .single();

        if (error) {
          console.error("Error fetching rider:", error);
        } else {
          setRider(data as Rider);
        }
        setLoadingRider(false);
      }
    };

    fetchRider();
  }, [order]);

  if (!order) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-900">Order Details</h2>
          <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
            ✕
          </button>
        </div>

        {/* Order Information */}
        <div className="space-y-3">
          <p><strong>Order ID:</strong> {order.orderid}</p>
          <p><strong>Customer:</strong> {order.customers.name}</p>
          <p><strong>Restaurant:</strong> {order.restaurants.restaurantname}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Total Amount:</strong> ${order.totalamount.toFixed(2)}</p>
          <p><strong>Payment Method:</strong> {order.paymentmethod}</p>
          <p><strong>Order Date:</strong> {new Date(order.createdat).toLocaleString()}</p>

          {/* Rider Information (Only if Delivered) */}
          {order.status.toLowerCase() === "delivered" && (
            <div className="border-t pt-3 mt-3">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Rider Information</h3>
              {loadingRider ? (
                <p>Loading rider details...</p>
              ) : rider ? (
                <div>
                  <p><strong>Rider ID:</strong> {rider.RiderId}</p>
                  <p><strong>Rider Name:</strong> {rider.Name}</p>
                </div>
              ) : (
                <p>No rider information available.</p>
              )}
            </div>
          )}
        </div>

        {/* Close Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}