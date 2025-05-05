
"use client";
// customerContext.tsx
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface CustomerContextType {
  customerData: any;
  setCustomerData: React.Dispatch<React.SetStateAction<any>>;
}

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

export const CustomerProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [customerData, setCustomerData] = useState<any>(null);

  return (
    <CustomerContext.Provider value={{ customerData, setCustomerData }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useCustomerContext must be used within a CustomerProvider");
  }
  return context;
};
