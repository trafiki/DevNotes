import { TopBar } from "@/components/dashboard/TopBar";

export default function DashboardLayout({
  children,
}: LayoutProps<"/dashboard">) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar placeholder: built in dashboard phase 2 */}
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar p-4 md:block">
        <h2 className="text-lg font-semibold">Sidebar</h2>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
