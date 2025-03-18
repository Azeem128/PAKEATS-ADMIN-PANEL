"use client";

const WalletPage = () => {
  const transactions = [
    { id: 1, type: "Credit", amount: "+$150", date: "2024-03-01" },
    { id: 2, type: "Debit", amount: "-$50", date: "2024-03-02" },
  ];

  return (
    <div className="p-6 bg-white rounded shadow-md w-full h-full">
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>
      <div className="border p-4 bg-gray-100 rounded">
        {transactions.map((txn) => (
          <div key={txn.id} className={`mb-2 p-2 rounded ${txn.type === "Credit" ? "bg-green-200" : "bg-red-200"}`}>
            <strong>{txn.type}:</strong> {txn.amount} - {txn.date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
