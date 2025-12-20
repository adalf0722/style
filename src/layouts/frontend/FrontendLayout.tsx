import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../../components/common/ThemeSwitcher";

type FrontendLayoutProps = {
  children: ReactNode;
};

const links = [
  { label: "Home", to: "/" },
  { label: "Admin", to: "/admin" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Blog", to: "/blog" },
  { label: "Templates", to: "/templates" },
];

export const FrontendLayout = ({ children }: FrontendLayoutProps) => {
  return (
    <div className="site-shell relative min-h-screen overflow-hidden bg-background text-text">
      <header className="relative z-10 border-b border-secondary bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link className="text-lg font-semibold" to="/">
            Theme Capsule
          </Link>
          <nav className="flex flex-wrap gap-4 text-sm text-secondary">
            {links.map((link) => (
              <Link key={link.to} className="hover:text-primary" to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {children}
      </main>
      <footer className="relative z-10 border-t border-secondary py-10 text-center text-xs text-secondary">
        Multi-Theme Showcase. Pure frontend, instant switching.
      </footer>
    </div>
  );
};
