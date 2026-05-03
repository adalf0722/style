import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { ChartContainer } from "../../components/dashboard/ChartContainer";
import { DataTable } from "../../components/dashboard/DataTable";
import { KpiCard } from "../../components/dashboard/KpiCard";
import { DashboardLayout } from "../../layouts/dashboard/DashboardLayout";

const kpis = [
  { label: "Active users", value: "24.8K", change: "+12%" },
  { label: "Conversion", value: "6.4%", change: "+1.1%" },
  { label: "Revenue", value: "$128K", change: "+8%" },
];

const quickActions = [
  {
    title: "Schedule report",
    detail: "Send weekly growth summary every Monday.",
  },
  {
    title: "Export snapshot",
    detail: "Download current campaign metrics as CSV.",
  },
  {
    title: "Review alerts",
    detail: "Check anomalies before the next deploy window.",
  },
];

const audienceSegments = [
  { label: "Returning", value: "62%", width: "62%", tone: "bg-primary" },
  { label: "New", value: "38%", width: "38%", tone: "bg-accent" },
];

const healthSignals = [
  { label: "Data latency", value: "2m", status: "Healthy" },
  { label: "Campaigns live", value: "18", status: "Synced" },
  { label: "Alerts open", value: "3", status: "Review" },
];

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <section className="panel-surface overflow-hidden p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Executive overview
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-text md:text-4xl">
              Campaign performance is trending above target.
            </h1>
            <p className="text-sm leading-6 text-secondary">
              Monitor acquisition, revenue, and conversion health from one
              theme-aware operations surface.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="min-h-11" variant="ghost">
              Export
            </Button>
            <Button className="min-h-11">Create Report</Button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {healthSignals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-theme border border-secondary bg-background px-4 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs text-secondary">{signal.label}</p>
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-background">
                  {signal.status}
                </span>
              </div>
              <p className="mt-2 text-2xl font-semibold text-text">
                {signal.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            change={kpi.change}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <ChartContainer />
        <div className="space-y-4">
          <Card className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  Action queue
                </p>
                <h3 className="text-lg font-semibold text-text">
                  Quick Actions
                </h3>
              </div>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-background">
                3 open
              </span>
            </div>
            <div className="space-y-3">
              {quickActions.map((action) => (
                <button
                  key={action.title}
                  className="theme-animate w-full rounded-theme border border-secondary bg-background px-4 py-3 text-left hover:border-primary"
                  type="button"
                >
                  <span className="block text-sm font-semibold text-text">
                    {action.title}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-secondary">
                    {action.detail}
                  </span>
                </button>
              ))}
            </div>
          </Card>

          <Card className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Audience mix
              </p>
              <h3 className="text-lg font-semibold text-text">
                Returning users lead engagement.
              </h3>
            </div>
            <div className="overflow-hidden rounded-full bg-secondary/30">
              <div className="flex h-3 w-full">
                {audienceSegments.map((segment) => (
                  <div
                    key={segment.label}
                    className={segment.tone}
                    style={{ width: segment.width }}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {audienceSegments.map((segment) => (
                <div
                  key={segment.label}
                  className="rounded-theme border border-secondary bg-background px-4 py-3"
                >
                  <p className="text-xs text-secondary">{segment.label}</p>
                  <p className="text-xl font-semibold text-text">
                    {segment.value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Campaign table
            </p>
            <h3 className="text-xl font-semibold text-text">
              Spend and conversion detail
            </h3>
          </div>
          <Button className="min-h-11" variant="ghost">
            View All
          </Button>
        </div>
        <DataTable />
      </section>
    </DashboardLayout>
  );
};
