import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all
     ${
       isActive
         ? "bg-[#B11226] text-[#F6F1E8] shadow-md"
         : "text-[#F6F1E8]/90 hover:bg-white/10"
     }`;

  return (
    <aside className="w-64 bg-[#0A1F44] text-[#F6F1E8] h-screen sticky top-0 p-6 flex flex-col">

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
        <NavLink to="/dashboard" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/dashboard/courses" className={linkClass}>
          📚 Explore Classes
        </NavLink>

        <NavLink to="/dashboard/submissions" className={linkClass}>
          📝 Submissions
        </NavLink>

        <NavLink to="/dashboard/certificates" className={linkClass}>
          🎓 Certificates
        </NavLink>
      </nav>

      {/* FOOTER */}
      <div className="pt-6 border-t border-white/10 text-xs text-[#F6F1E8]/60">
        © 2026 TechcXel
      </div>
    </aside>
  );
}
