import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../../components/common/ThemeSwitcher";

type BlogLayoutProps = {
  children: ReactNode;
};

export const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div className="site-shell min-h-screen bg-background text-text">
      <header className="border-b border-secondary">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <Link className="text-lg font-semibold" to="/blog">
            Story Archive
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary">
            <Link className="hover:text-primary" to="/">
              Back to Home
            </Link>
            <ThemeSwitcher />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-12">{children}</main>
    </div>
  );
};
