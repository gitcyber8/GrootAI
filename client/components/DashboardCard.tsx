interface DashboardCardProps {
  title: string;
  value: string;
  color: string;
}

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div className="bg-[#0B1120] border border-gray-800 rounded-2xl p-5 hover:border-purple-500 transition-all">
      {/* Top */}
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-sm">
          {title}
        </p>

        <div className={`w-3 h-3 rounded-full ${color}`} />
      </div>

      {/* Main Number */}
      <h2 className="text-3xl font-bold mt-5">
        {value}
      </h2>

      {/* Footer */}
      <p className="text-green-400 text-sm mt-2">
        +12% from last hour
      </p>
    </div>
  );
}