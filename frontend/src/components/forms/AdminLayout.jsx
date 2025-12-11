import { useNavigate } from "react-router-dom";
import React from "react";

const NavItem = ({ title, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-5 py-3 rounded-md cursor-pointer
    ${active ? "bg-slate-700 text-amber-300" : "text-slate-200 hover:bg-slate-800"}`}
  >
    <span className="text-sm">{title}</span>
  </div>
);

export default function AdminLayout({ children, title = "Welcome back to Dashboard !!" }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#0f1416] text-slate-100">
      {/* Sidebar */}
      <aside className="w-56 bg-[#0f2030] border-r border-slate-800 px-6 py-8 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-extrabold tracking-tight">Admin Panel</h1>
          <p className="text-xs text-slate-400 mt-1">Innovation Hub</p>
        </div>

        <nav className="flex-1 space-y-2">
          <NavItem title="Placements" />
          <NavItem title="Lecture Notes" />
          <NavItem title="Upload Material" active />
          <NavItem title="Transport Info" />
          <NavItem title="Event Manager" />
        </nav>

        {/* ✅ FIXED LOGOUT BUTTON */}
        <div className="mt-8">
          <NavItem 
            title="Logout"
            onClick={() => navigate("/logout")}
          />
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 max-w-full">
        <header className="mb-8">
          <h2 className="text-5xl font-extrabold tracking-tight text-slate-100 leading-tight">{title}</h2>
        </header>

        <section>{children}</section>
      </main>
    </div>
  );
}
