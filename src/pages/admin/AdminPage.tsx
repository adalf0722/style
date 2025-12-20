import { AdminForm } from "../../components/admin/AdminForm";
import { CrudList } from "../../components/admin/CrudList";
import { Alert } from "../../components/common/Alert";
import { Card } from "../../components/common/Card";
import { Table } from "../../components/common/Table";
import { AdminLayout } from "../../layouts/admin/AdminLayout";

const approvalHeaders = ["Request", "Owner", "Status"];
const approvalRows = [
  ["Campaign launch", "Luna Team", "Review"],
  ["Copy update", "Echo Team", "Approved"],
  ["Product sync", "Nova Team", "Review"],
];

export const AdminPage = () => {
  return (
    <AdminLayout>
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminForm />
        <Card className="space-y-4">
          <div>
            <p className="text-sm font-semibold text-text">Pending approvals</p>
            <p className="text-xs text-secondary">
              Items waiting for administrator review.
            </p>
          </div>
          <Table headers={approvalHeaders} rows={approvalRows} />
        </Card>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <CrudList />
        <div className="space-y-4">
          <Alert
            title="Workflow health"
            description="All form inputs are synced to the active theme tokens."
            variant="info"
          />
          <Alert
            title="Scheduled deploy"
            description="Next content rollup goes live in 3 hours."
            variant="warning"
          />
        </div>
      </div>
    </AdminLayout>
  );
};
