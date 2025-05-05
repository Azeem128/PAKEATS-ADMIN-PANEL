const stats = [
    { label: "Total Orders", value: 75 },
    { label: "Total Delivered", value: 357 },
    { label: "Total Canceled", value: 65 },
    { label: "Total Revenue", value: "$128" },
  ];
  
  export default function DashboardCards() {
    return (
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="p-4 bg-white shadow rounded text-center">
            <h2 className="text-2xl font-bold">{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    );
  }
  