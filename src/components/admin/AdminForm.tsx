import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";

export const AdminForm = () => {
  return (
    <Card className="space-y-4">
      <div>
        <p className="text-sm font-semibold text-text">Create New Entry</p>
        <p className="text-xs text-secondary">
          Manage content for the storefront and promotions.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <Input placeholder="Title" />
        <Input placeholder="Owner" />
        <Input placeholder="Category" />
        <Input placeholder="Status" />
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button>Save Draft</Button>
        <Button variant="secondary">Publish</Button>
      </div>
    </Card>
  );
};
