import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { AdminSidebar } from "../../components/admin/AdminSidebar";
import { ThemeSwitcher } from "../../components/common/ThemeSwitcher";

type AdminLayoutProps = {
  children: ReactNode;
};

export const AdminLayout = ({ children }: AdminLayoutProps) => {
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
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 lg:grid-cols-[240px_1fr]">
        <AdminSidebar />
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-text">
                Content Operations
              </h2>
              <p className="text-sm text-secondary">
                Monitor workflows and approve new launches.
              </p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
