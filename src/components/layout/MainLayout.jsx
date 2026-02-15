import { Outlet } from "react-router-dom";
import { SiteHeader } from "../navigation/SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function MainLayout() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="app-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
