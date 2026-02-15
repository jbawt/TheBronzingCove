import { Outlet } from "react-router-dom";
import { SiteHeader } from "../navigation/SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { StickySocialSidebar } from "./StickySocialSidebar";
import { ThemeInitializer } from "./ThemeInitializer";

export function MainLayout() {
  return (
    <div className="app-shell">
      <ThemeInitializer />
      <SiteHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <StickySocialSidebar />
      <SiteFooter />
    </div>
  );
}
