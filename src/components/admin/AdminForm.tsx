import type { CSSProperties } from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Input } from "../common/Input";

const textFields = [
  {
    id: "entry-title",
    label: "Entry title",
    placeholder: "Seasonal campaign update",
    helper: "Use a clear internal name for approvals and search.",
  },
  {
    id: "entry-owner",
    label: "Owner",
    placeholder: "Studio A",
    helper: "Assign the team responsible for final review.",
  },
  {
    id: "entry-category",
    label: "Category",
    placeholder: "Promotion",
    helper: "Group entries for filtering across admin views.",
  },
];

const reviewSteps = [
  { label: "Brief", state: "Ready" },
  { label: "Assets", state: "Queued" },
  { label: "Publish", state: "Draft" },
];

const summaryStyle = {
  "--panel-surface-color": "var(--color-background)",
} as CSSProperties;

export const AdminForm = () => {
  return (
    <Card className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
            Content editor
          </p>
          <h3 className="text-xl font-semibold leading-tight text-text">
            Create New Entry
          </h3>
          <p className="max-w-md text-sm leading-6 text-secondary">
            Prepare storefront content, assign ownership, and stage the launch
            for review.
          </p>
        </div>
        <span className="rounded-full border border-secondary bg-surface px-3 py-1.5 text-xs font-semibold text-secondary">
          Draft mode
        </span>
      </div>

      <div className="grid gap-5">
        <div className="grid gap-4">
          {textFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <label
                className="block text-sm font-semibold text-text"
                htmlFor={field.id}
              >
                {field.label}
              </label>
              <Input id={field.id} placeholder={field.placeholder} />
              <p className="text-xs leading-5 text-secondary">
                {field.helper}
              </p>
            </div>
          ))}

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-text"
              htmlFor="entry-status"
            >
              Status
            </label>
            <select
              className="input-field theme-animate min-h-11"
              defaultValue="draft"
              id="entry-status"
            >
              <option value="draft">Draft</option>
              <option value="review">Ready for review</option>
              <option value="scheduled">Scheduled</option>
              <option value="live">Live</option>
            </select>
            <p className="text-xs leading-5 text-secondary">
              Controls where this entry appears in the approval queue.
            </p>
          </div>
        </div>

        <div className="panel-surface space-y-4 p-4" style={summaryStyle}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Launch checks
            </p>
            <p className="mt-1 text-sm text-secondary">
              3 required fields before publish.
            </p>
          </div>
          <div className="space-y-3">
            {reviewSteps.map((step) => (
              <div
                key={step.label}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="text-text">{step.label}</span>
                <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-background">
                  {step.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-secondary pt-5">
        <p className="max-w-sm text-xs leading-5 text-secondary">
          Drafts stay private until published. Publishing sends the entry to
          the active storefront theme.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button className="min-h-11" variant="ghost">
            Save Draft
          </Button>
          <Button className="min-h-11" variant="secondary">
            Publish
          </Button>
        </div>
      </div>
    </Card>
  );
};
