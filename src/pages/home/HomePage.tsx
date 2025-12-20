import type { CSSProperties } from "react";
import { Alert } from "../../components/common/Alert";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { FrontendLayout } from "../../layouts/frontend/FrontendLayout";

const themeTags = [
  "Star Wars",
  "Animal Crossing",
  "Cyberpunk",
  "Ghibli",
  "Minimal",
];

const diagnostics = [
  { label: "Tokens synced", value: "100%", tone: "text-accent" },
  { label: "Components themed", value: "42", tone: "text-primary" },
  { label: "Layouts active", value: "4", tone: "text-accent" },
  { label: "Routes ready", value: "8", tone: "text-primary" },
];

const signalBars = [
  { label: "Primary", value: "100%", tone: "bg-primary" },
  { label: "Accent", value: "84%", tone: "bg-accent" },
  { label: "Surface", value: "72%", tone: "bg-secondary" },
];

const foundations = [
  {
    title: "Theme store",
    description: "One source of truth for every layout and component.",
  },
  {
    title: "Local persistence",
    description: "The selected mood survives refresh and navigation.",
  },
  {
    title: "Token mapping",
    description: "Every UI decision is a token, not a hard-coded style.",
  },
];

const features = [
  {
    title: "Instant Theme Shift",
    description: "Switch across pages with zero reload and retained state.",
    detail: "CSS variables update in real time without reflow shocks.",
  },
  {
    title: "Token Driven UI",
    description: "Every component follows the same theme contract.",
    detail: "Buttons, modals, and tables stay visually consistent.",
  },
  {
    title: "Adaptive Surfaces",
    description: "Cards and panels feel different per theme.",
    detail: "Radius, shadow, and motion change with the theme pack.",
    highlight: true,
  },
  {
    title: "Multi-Surface Layouts",
    description: "Frontend, admin, dashboard, and blog in one system.",
    detail: "Each layout interprets the same tokens differently.",
  },
];

const pricing = [
  {
    plan: "Studio",
    price: "$29",
    detail: "Theme starter kit",
    perks: ["3 theme packs", "Core components", "Starter docs"],
  },
  {
    plan: "Agency",
    price: "$69",
    detail: "Unlimited brand packs",
    perks: ["All presets", "Token lab access", "Priority support"],
    featured: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    detail: "Bespoke system",
    perks: ["Dedicated team", "Custom integrations", "SLA onboarding"],
  },
];

const foundationCardStyle = {
  "--card-surface-color": "var(--color-background)",
} as CSSProperties;

const highlightCardStyle = {
  "--card-surface-color": "var(--highlight-surface)",
  "--card-texture":
    "linear-gradient(120deg, rgba(255, 255, 255, 0.35), transparent 60%)",
  "--card-border": "var(--highlight-border)",
  "--card-border-width": "2px",
  color: "var(--highlight-text)",
} as CSSProperties;

const featuredPricingStyle = {
  "--card-surface-color": "var(--color-background)",
  "--card-border": "var(--color-primary)",
} as CSSProperties;

const panelSurfaceStyle = {
  "--panel-surface-color": "var(--color-background)",
} as CSSProperties;

export const HomePage = () => {
  return (
    <FrontendLayout>
      <div className="space-y-20">
        <section className="panel-surface relative overflow-hidden p-8 md:p-12">
          <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-primary opacity-30 blur-3xl float-slow" />
          <div
            className="pointer-events-none absolute -left-24 bottom-[-140px] h-72 w-72 rounded-full bg-accent opacity-20 blur-3xl float-slow"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary bg-surface px-3 py-1 text-xs uppercase tracking-[0.3em] text-secondary">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Multi-theme system
              </div>
              <h1 className="text-4xl font-semibold leading-[1.05] text-text md:text-6xl">
                Design one product, reveal five realities.
              </h1>
              <p className="max-w-xl text-base text-secondary md:text-lg">
                Explore how a single UI framework transforms under radically
                different art directions. Toggle the theme and watch every
                layout, card, and surface shift instantly.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button>Launch Demo</Button>
                <Button variant="secondary">View Components</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {themeTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-secondary bg-surface px-3 py-1 text-xs font-semibold text-secondary card-surface"
                    style={{ "--card-border-width": "1px" } as React.CSSProperties}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="panel-surface p-6" style={panelSurfaceStyle}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-secondary">
                      Live Theme Diagnostic
                    </p>
                    <p className="text-sm text-secondary">
                      Status sync and token health.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
                    Online
                  </span>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {diagnostics.map((item) => (
                    <div key={item.label} className="panel-surface px-4 py-3">
                      <p className="text-xs text-secondary">{item.label}</p>
                      <p className={`text-xl font-semibold ${item.tone}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  {signalBars.map((bar) => (
                    <div key={bar.label} className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-secondary">
                        <span>{bar.label}</span>
                        <span>{bar.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary">
                        <div
                          className={`h-full rounded-full ${bar.tone}`}
                          style={{ width: bar.value }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Alert
                title="Theme broadcast"
                description="The UI listens to global tokens and updates instantly."
                variant="success"
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                Feature highlights
              </p>
              <h2 className="text-3xl font-semibold text-text">
                Design pillars that keep every theme aligned.
              </h2>
              <p className="text-sm text-secondary">
                Each page style shares the same foundation, so the system feels
                intentional even when the art direction changes.
              </p>
            </div>
            <Card className="space-y-4" style={foundationCardStyle}>
              {foundations.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-b border-secondary pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {item.title}
                    </p>
                    <p className="text-sm text-secondary">{item.description}</p>
                  </div>
                </div>
              ))}
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className={`space-y-3 ${feature.highlight ? "md:col-span-2" : ""}`}
                style={feature.highlight ? highlightCardStyle : undefined}
              >
                <p
                  className="text-xs uppercase tracking-[0.3em] text-secondary"
                >
                  {feature.title}
                </p>
                <h3
                  className="text-lg font-semibold text-text"
                >
                  {feature.description}
                </h3>
                <p
                  className="text-sm text-secondary"
                >
                  {feature.detail}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-secondary">
                Pricing
              </p>
              <h2 className="text-3xl font-semibold text-text">
                Pick the theme engine that fits your studio.
              </h2>
            </div>
            <Button variant="ghost">Explore Roadmap</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricing.map((plan) => (
              <Card
                key={plan.plan}
                className={`relative space-y-5 ${
                  plan.featured ? "md:-mt-6" : ""
                }`}
                style={plan.featured ? featuredPricingStyle : undefined}
              >
                {plan.featured ? (
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
                    Most Popular
                  </span>
                ) : null}
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-secondary">
                    {plan.plan}
                  </p>
                  <p className="text-3xl font-semibold text-text">
                    {plan.price}
                  </p>
                </div>
                <p className="text-sm text-secondary">{plan.detail}</p>
                <div className="space-y-2 text-sm text-secondary">
                  {plan.perks.map((perk) => (
                    <p key={perk}>+ {perk}</p>
                  ))}
                </div>
                <Button>Choose Plan</Button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </FrontendLayout>
  );
};
