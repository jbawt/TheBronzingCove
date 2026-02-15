import { Outlet } from "react-router-dom";
import { SiteHeader } from "../navigation/SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickySocialSidebar } from "./StickySocialSidebar";

export function MainLayout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <StickySocialSidebar />
      <SiteFooter />
    </div>
  );
}
