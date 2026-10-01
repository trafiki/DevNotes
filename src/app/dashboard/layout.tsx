import { cookies } from "next/headers";

import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { TopBar } from "@/components/dashboard/TopBar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  // The sidebar saves its expanded/collapsed state in this cookie
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset className="h-svh overflow-y-auto">
        <TopBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
