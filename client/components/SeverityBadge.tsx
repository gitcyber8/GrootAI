export default function SeverityBadge({
  severity,
}: {
  severity: string;
}) {
  const styles: any = {
    Critical: "bg-red-500/20 text-red-400",
    High: "bg-orange-500/20 text-orange-400",
    Medium: "bg-yellow-500/20 text-yellow-300",
    Low: "bg-green-500/20 text-green-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[severity]}`}
    >
      {severity}
    </span>
  );
}