export function SectionHeader({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <div className="flex items-baseline justify-between">
      <h2 className="text-2xl font-medium">{title}</h2>
      <span className="text-sm text-gray-500">
        {count} team{count !== 1 ? "s" : ""}
      </span>
    </div>
  );
}
