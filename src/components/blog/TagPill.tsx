type TagPillProps = {
  label: string;
};

export const TagPill = ({ label }: TagPillProps) => {
  const style = {
    "--card-border": "var(--color-secondary)",
    "--card-border-width": "1.5px",
    "--card-surface-color": "var(--color-background)",
    "--card-highlight-opacity": "0.2",
  } as React.CSSProperties;

  return (
    <span
      className="card-surface rounded-theme px-3 py-1 text-xs font-semibold text-secondary"
      style={style}
    >
      {label}
    </span>
  );
};
