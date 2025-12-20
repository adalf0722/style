const items = ["Overview", "Users", "Products", "Billing", "Settings"];

export const AdminSidebar = () => {
  return (
    <aside className="panel-surface p-5">
      <h3 className="text-sm font-semibold text-text">Admin Panel</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item, index) => (
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
  );
};
