import { Card } from "../common/Card";

type TrafficPoint = {
  label: string;
  visitors: number;
  conversions: number;
};

const traffic: TrafficPoint[] = [
  { label: "Mon", visitors: 12.4, conversions: 3.2 },
  { label: "Tue", visitors: 9.8, conversions: 2.1 },
  { label: "Wed", visitors: 15.6, conversions: 4.5 },
  { label: "Thu", visitors: 7.2, conversions: 1.8 },
  { label: "Fri", visitors: 13.4, conversions: 3.9 },
  { label: "Sat", visitors: 11.1, conversions: 3.3 },
  { label: "Sun", visitors: 16.8, conversions: 4.9 },
];

const buildLinePath = (values: number[]) => {
  if (values.length === 0) return "";
  const max = Math.max(...values);
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 100 - (value / max) * 100;
    return `${x},${y}`;
  });
  return `M ${points.join(" L ")}`;
};

export const ChartContainer = () => {
  const maxVisitors = Math.max(...traffic.map((t) => t.visitors));
  const lineSeries = traffic.map((t) => t.conversions);
  const path = buildLinePath(lineSeries);

  return (
    <Card className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-secondary">
            Traffic Pulse
          </p>
          <h3 className="text-lg font-semibold text-text">Daily flow</h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-secondary">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Visitors
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Conversions
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-4">
          <div className="flex h-56 items-end gap-3 md:h-64">
            {traffic.map((point) => {
              const height = Math.max(16, (point.visitors / maxVisitors) * 180); // px
              return (
                <div key={point.label} className="flex-1 space-y-2">
                  <div
                    className="relative w-full rounded-theme"
                    style={{
                      height: `${height}px`,
                      background: `linear-gradient(180deg, var(--color-primary), rgba(0,0,0,0.08))`,
                      boxShadow: "0 12px 24px rgba(0,0,0,0.08)",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                    title={`${point.label}: ${point.visitors.toFixed(1)}k`}
                  >
                    <span className="absolute inset-x-0 -top-6 text-center text-xs font-semibold text-text">
                      {point.visitors.toFixed(1)}k
                    </span>
                  </div>
                  <p className="text-center text-xs text-secondary">{point.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="panel-surface p-4">
          <p className="text-xs uppercase tracking-[0.25em] text-secondary">
            Conversions
          </p>
          <svg viewBox="0 0 100 100" className="mt-3 h-40 w-full text-accent">
            <defs>
              <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.3" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${path} L 100 100 L 0 100 Z`}
              fill="url(#area-fill)"
              stroke="none"
            />
            <path
              d={path}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {lineSeries.map((value, index) => {
              const max = Math.max(...lineSeries);
              const x = (index / (lineSeries.length - 1)) * 100;
              const y = 100 - (value / max) * 100;
              return (
                <circle
                  key={`${value}-${index}`}
                  cx={x}
                  cy={y}
                  r={1.6}
                  fill="currentColor"
                />
              );
            })}
          </svg>
          <div className="flex items-center justify-between text-xs text-secondary">
            <span>Mon</span>
            <span>Sun</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
