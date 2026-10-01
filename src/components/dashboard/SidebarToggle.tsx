"use client";

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

// Top bar button to open the sidebar: always on mobile (drawer), and on
// desktop only while collapsed (the expanded sidebar has its own button)
export function SidebarToggle() {
  const { isMobile, state } = useSidebar();

  if (!isMobile && state === "expanded") return null;

  return (
    <SidebarTrigger
      title="Open sidebar"
      variant="outline"
      size="icon-lg"
      className="shrink-0 text-muted-foreground"
    />
  );
}
