import { ChartContainer } from "../../components/dashboard/ChartContainer";
import { DataTable } from "../../components/dashboard/DataTable";
import { KpiCard } from "../../components/dashboard/KpiCard";
import { DashboardLayout } from "../../layouts/dashboard/DashboardLayout";

const kpis = [
  { label: "Active users", value: "24.8K", change: "+12%" },
  { label: "Conversion", value: "6.4%", change: "+1.1%" },
  { label: "Revenue", value: "$128K", change: "+8%" },
];

export const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-4 md:grid-cols-3">
        {kpis.map((kpi) => (
          <KpiCard
            key={kpi.label}
            label={kpi.label}
            value={kpi.value}
            change={kpi.change}
          />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <ChartContainer />
        <div className="space-y-4">
          <div className="panel-surface p-5">
            <h3 className="text-lg font-semibold text-text">Quick Actions</h3>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              <li>Schedule weekly report</li>
              <li>Export campaign snapshot</li>
              <li>Review anomaly alerts</li>
            </ul>
          </div>
          <div className="panel-surface p-5">
            <h3 className="text-lg font-semibold text-text">Audience mix</h3>
            <p className="text-sm text-secondary">
              Returning: 62% · New: 38%
            </p>
            <div className="mt-4 h-2 rounded-full bg-secondary">
              <div className="h-full w-2/3 rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
      <DataTable />
    </DashboardLayout>
  );
};
