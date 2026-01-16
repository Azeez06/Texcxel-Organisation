import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
     ${
       isActive
         ? "bg-[#B11226] text-[#F6F1E8] shadow-md"
         : "text-[#F6F1E8]/90 hover:bg-white/10"
     }`;

  return (
    <>
    <button
  onClick={() => setOpen(true)}
  className="
    fixed md:hidden
    top-4 left-4
    z-40
    bg-[#0A1F44]
    text-white
    p-3
    rounded-xl
    shadow-lg
  "
>
  <Menu className="w-5 h-5" />
</button>
   

      {/* ===== MOBILE OVERLAY ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== SIDEBAR ===== */}
      <aside
        className={`
          fixed md:sticky top-0 z-50
          h-screen w-64
          bg-[#0A1F44] text-[#F6F1E8]
          p-6 flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* CLOSE (mobile only) */}
        <button
          className="md:hidden absolute top-4 right-4"
          onClick={() => setOpen(false)}
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* BRAND */}
        <div className="mb-12">
          <h1 className="text-2xl font-extrabold tracking-wide">
            <span className="text-[#B11226]">Tech</span>
            <span className="text-[#F6F1E8]">c</span>
            <span className="text-[#0B132B] bg-[#F6F1E8] px-1 rounded-md ml-0.5">
              Xel
            </span>
          </h1>
          <p className="text-xs text-[#F6F1E8]/70 mt-2">
            Learning Dashboard
          </p>
        </div>

        {/* NAV */}
        <nav className="space-y-3 flex-1">
          <NavLink to="/dashboard" className={linkClass} onClick={() => setOpen(false)}>
            📊 Dashboard
          </NavLink>

          <NavLink to="/dashboard/courses" className={linkClass} onClick={() => setOpen(false)}>
            📚 Explore Classes
          </NavLink>

          <NavLink to="/dashboard/submissions" className={linkClass} onClick={() => setOpen(false)}>
            📝 Submissions
          </NavLink>

          <NavLink to="/dashboard/certificates" className={linkClass} onClick={() => setOpen(false)}>
            🎓 Certificates
          </NavLink>
        </nav>

        {/* FOOTER */}
        <div className="pt-6 border-t border-white/10 text-xs text-[#F6F1E8]/60">
          © 2026 TechcXel
        </div>
      </aside>
    </>
  );
}
