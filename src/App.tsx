import { Navigate, Route, Routes } from "react-router-dom";
import { AdminPage } from "./pages/admin/AdminPage";
import { BlogDetailPage } from "./pages/blog/BlogDetailPage";
import { BlogListPage } from "./pages/blog/BlogListPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { HomePage } from "./pages/home/HomePage";
import { TemplatePage } from "./pages/templates/TemplatePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/blog" element={<BlogListPage />} />
      <Route path="/blog/:id" element={<BlogDetailPage />} />
      <Route path="/templates" element={<TemplatePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
