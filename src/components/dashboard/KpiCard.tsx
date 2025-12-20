import { Card } from "../common/Card";

type KpiCardProps = {
  label: string;
  value: string;
  change: string;
};

export const KpiCard = ({ label, value, change }: KpiCardProps) => {
  return (
    <Card className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.2em] text-secondary">
        {label}
      </p>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-text">{value}</span>
        <span className="text-sm font-semibold text-accent">{change}</span>
      </div>
    </Card>
  );
};
