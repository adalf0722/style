import { Button } from "../common/Button";
import { Card } from "../common/Card";

const rows = [
  { name: "Seasonal Landing", owner: "Studio A", status: "Live" },
  { name: "Holiday Bundle", owner: "Studio B", status: "Draft" },
  { name: "VIP Early Access", owner: "Studio C", status: "Paused" },
];

export const CrudList = () => {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-text">Content Entries</p>
          <p className="text-xs text-secondary">Recent updates from editors.</p>
        </div>
        <Button variant="ghost">New Item</Button>
      </div>
      <div className="space-y-3">
        {rows.map((row) => (
          <div
            key={row.name}
            className="panel-surface flex flex-wrap items-center justify-between gap-3 px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-text">{row.name}</p>
              <p className="text-xs text-secondary">{row.owner}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-theme bg-accent px-3 py-1 text-xs font-semibold text-background">
                {row.status}
              </span>
              <Button variant="secondary">Edit</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
