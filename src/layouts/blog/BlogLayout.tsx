import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../../components/common/ThemeSwitcher";

type BlogLayoutProps = {
  children: ReactNode;
};

export const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="site-shell min-h-screen bg-background text-text">
      <header className="border-b border-secondary bg-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <Link className="text-lg font-semibold text-text" to="/blog">
            Story Archive
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
            <Link className="hover:text-primary" to="/templates">
              Templates
            </Link>
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
    </div>
  );
};
