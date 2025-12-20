import { useTheme } from "../../core/theme-store";

export const ThemeSwitcher = () => {
  const { themes, currentTheme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs uppercase tracking-[0.3em] text-secondary">
        Theme
      </span>
      <div className="card-surface px-3 py-1.5">
        <select
          className="theme-animate bg-transparent text-sm text-text focus:outline-none"
          style={{
            color: "var(--color-text)",
            backgroundColor: "var(--color-surface)",
          }}
          value={currentTheme.id}
          onChange={(event) => setTheme(event.target.value)}
        >
          {themes.map((theme) => (
            <option
              key={theme.id}
              value={theme.id}
              className="bg-background text-text"
              style={{
                color: "var(--color-text)",
                backgroundColor: "var(--color-surface)",
              }}
            >
              {theme.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
