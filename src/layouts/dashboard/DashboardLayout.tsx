import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../../components/common/ThemeSwitcher";

type DashboardLayoutProps = {
  children: ReactNode;
};

const navItems = ["Overview", "Reports", "Audience", "Integrations"];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="site-shell min-h-screen bg-background text-text">
      <header className="border-b border-secondary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <Link className="text-lg font-semibold" to="/">
            Theme Capsule
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-secondary">
            <Link className="hover:text-primary" to="/">
              Home
            </Link>
            <Link className="hover:text-primary" to="/admin">
              Admin
            </Link>
            <Link className="hover:text-primary" to="/dashboard">
              Dashboard
            </Link>
            <Link className="hover:text-primary" to="/blog">
              Blog
            </Link>
            <Link className="hover:text-primary" to="/templates">
              Templates
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[220px_1fr]">
        <aside className="panel-surface p-5">
          <h3 className="text-sm font-semibold text-text">Atlas Ops</h3>
          <p className="text-xs text-secondary">Realtime analytics</p>
          <ul className="mt-6 space-y-2 text-sm">
            {navItems.map((item, index) => (
              <li
                key={item}
                className={`rounded-theme px-3 py-2 ${
                  index === 0 ? "bg-primary text-background" : "text-text"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-text">
                Growth Dashboard
              </h2>
              <p className="text-sm text-secondary">
                Snapshot of your campaign performance.
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
