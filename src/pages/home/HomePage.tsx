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
  { label: "Components", value: "42", tone: "text-primary" },
  { label: "Layouts", value: "4", tone: "text-accent" },
  { label: "Routes", value: "8", tone: "text-primary" },
];

const signalBars = [
  { label: "Primary token coverage", value: "100%", tone: "bg-primary" },
  { label: "Accent contrast checks", value: "84%", tone: "bg-accent" },
  { label: "Surface consistency", value: "72%", tone: "bg-secondary" },
];

const foundations = [
  {
    title: "Theme store",
    description: "One state layer coordinates every layout and component.",
  },
  {
    title: "Local persistence",
    description: "The selected mood survives refresh and route changes.",
  },
  {
    title: "Token mapping",
    description: "Color, radius, shadow, motion, and typography stay portable.",
  },
];

const features = [
  {
    title: "Instant Theme Shift",
    description: "Switch the full application without reloads or layout jumps.",
  },
  {
    title: "Token Driven UI",
    description: "Buttons, cards, forms, tables, and alerts share one contract.",
  },
  {
    title: "Adaptive Surfaces",
    description: "Texture, elevation, and border treatment respond per theme.",
  },
  {
    title: "Multi-Surface Layouts",
    description: "Frontend, admin, dashboard, blog, and templates stay aligned.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Choose direction",
    description: "Start from a cinematic, playful, editorial, or minimal pack.",
  },
  {
    step: "02",
    title: "Inspect coverage",
    description: "Check how shared components behave across real app surfaces.",
  },
  {
    step: "03",
    title: "Copy patterns",
    description: "Use the template library to export theme-ready UI snippets.",
  },
];

const pricing = [
  {
    plan: "Studio",
    price: "$29",
    detail: "Starter system for a focused product team.",
    perks: ["3 theme packs", "Core components", "Starter docs"],
  },
  {
    plan: "Agency",
    price: "$69",
    detail: "Expanded library for repeated client work.",
    perks: ["All presets", "Token lab access", "Priority support"],
    featured: true,
  },
  {
    plan: "Enterprise",
    price: "Custom",
    detail: "Bespoke implementation for complex systems.",
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
  "--card-border-width": "2px",
} as CSSProperties;

const visualPanelStyle = {
  "--panel-surface-color": "var(--color-background)",
  "--card-shadow": "0 24px 70px rgba(0, 0, 0, 0.34)",
} as CSSProperties;

const previewImageSrc = `${import.meta.env.BASE_URL}style.webp`;

export const HomePage = () => {
  return (
    <FrontendLayout>
      <div className="space-y-20">
        <section className="grid min-h-[calc(100dvh-12rem)] items-center gap-10 py-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-secondary bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-wide text-secondary">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Multi-theme system
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.08] text-text sm:text-4xl md:text-6xl">
                Design one product. Preview every visual identity.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-secondary md:text-lg">
                Theme Capsule turns a single React interface into a living
                style system. Change the theme once and watch layout,
                components, motion, and surfaces update together.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button className="min-h-11 px-5">Launch Demo</Button>
              <Button className="min-h-11 px-5" variant="secondary">
                View Components
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {themeTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-secondary bg-surface px-3 py-1.5 text-xs font-semibold text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-surface overflow-hidden p-4" style={visualPanelStyle}>
            <div className="relative overflow-hidden rounded-[calc(var(--radius-base)-4px)] border border-secondary bg-background">
              <img
                src={previewImageSrc}
                alt="Theme Capsule interface preview"
                className="aspect-[16/11] w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 grid gap-3 rounded-theme border border-secondary bg-background p-4 md:grid-cols-4">
                {diagnostics.map((item) => (
                  <div key={item.label} className="min-w-0">
                    <p className="text-xs text-secondary">{item.label}</p>
                    <p className={`text-xl font-semibold ${item.tone}`}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 space-y-4 px-1">
              {signalBars.map((bar) => (
                <div key={bar.label} className="space-y-2">
                  <div className="flex items-center justify-between gap-4 text-xs text-secondary">
                    <span>{bar.label}</span>
                    <span className="font-semibold text-text">{bar.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-secondary/30">
                    <div
                      className={`h-full rounded-full ${bar.tone}`}
                      style={{ width: bar.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Feature highlights
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight text-text">
                A stable foundation for wildly different moods.
              </h2>
              <p className="max-w-lg text-sm leading-6 text-secondary">
                The system separates visual personality from component
                behavior, so each theme feels intentional without forking UI
                code.
              </p>
            </div>
            <Card className="space-y-4" style={foundationCardStyle}>
              {foundations.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 border-b border-secondary pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-background">
                    {item.title.slice(0, 1)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {item.title}
                    </p>
                    <p className="text-sm leading-6 text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="space-y-4"
                style={index === 2 ? highlightCardStyle : undefined}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                  0{index + 1}
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold leading-snug text-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-secondary">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {workflow.map((item) => (
            <div
              key={item.step}
              className="border-t border-secondary pt-5"
            >
              <p className="text-sm font-semibold text-primary">{item.step}</p>
              <h3 className="mt-3 text-xl font-semibold text-text">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </section>

        <Alert
          title="Theme broadcast"
          description="Global tokens update in real time, so every page reflects the active art direction immediately."
          variant="success"
        />

        <section className="space-y-7">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Pricing
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-text">
                Pick the theme engine that fits your studio.
              </h2>
            </div>
            <Button className="min-h-11" variant="ghost">
              Explore Roadmap
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {pricing.map((plan) => (
              <Card
                key={plan.plan}
                className={`relative flex flex-col gap-5 ${
                  plan.featured ? "md:-mt-6" : ""
                }`}
                style={plan.featured ? featuredPricingStyle : undefined}
              >
                {plan.featured ? (
                  <span className="w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
                    Most Popular
                  </span>
                ) : null}
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
                    {plan.plan}
                  </p>
                  <p className="text-4xl font-semibold text-text">
                    {plan.price}
                  </p>
                  <p className="text-sm leading-6 text-secondary">
                    {plan.detail}
                  </p>
                </div>
                <div className="space-y-3 text-sm text-secondary">
                  {plan.perks.map((perk) => (
                    <p key={perk} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{perk}</span>
                    </p>
                  ))}
                </div>
                <Button className="mt-auto min-h-11">Choose Plan</Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="pb-10 text-center text-sm text-secondary">
          <a
            href="https://github.com/adalf0722/style"
            className="font-semibold text-primary hover:underline"
          >
            Source on GitHub
          </a>
        </section>
      </div>
    </FrontendLayout>
  );
};
