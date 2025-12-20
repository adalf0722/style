type AlertProps = {
  title: string;
  description: string;
  variant?: "info" | "success" | "warning";
};

const variants = {
  info: {
    border: "var(--color-secondary)",
    text: "text-secondary",
    surface: "var(--card-surface-color, var(--color-surface))",
  },
  success: {
    border: "var(--color-primary)",
    text: "text-primary",
    surface: "var(--card-surface-color, var(--color-surface))",
  },
  warning: {
    border: "var(--color-accent)",
    text: "text-accent",
    surface: "var(--card-surface-color, var(--color-surface))",
  },
};

export const Alert = ({
  title,
  description,
  variant = "info",
}: AlertProps) => {
  const current = variants[variant];
  const style = {
    "--card-border": `${current.border}`,
    "--card-border-width": "2px",
    "--card-surface-color": current.surface,
  } as React.CSSProperties;

  return (
    <div
      className={`card-surface theme-animate p-4 ${current.text}`}
      style={style}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm text-text">{description}</p>
    </div>
  );
};
