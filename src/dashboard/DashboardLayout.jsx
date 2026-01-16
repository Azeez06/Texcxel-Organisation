import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

export default function DashboardLayout() {
  return (
    <div className="flex bg-[#F8FAFC] min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 pt-16 md:pt-8">
  <Outlet />
</main>

    </div>
  );
}
