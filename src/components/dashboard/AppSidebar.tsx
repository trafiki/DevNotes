"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Folder, LayoutGrid, Star } from "lucide-react";

import { SidebarCollections } from "@/components/dashboard/SidebarCollections";
import { SidebarTypes } from "@/components/dashboard/SidebarTypes";
import { SidebarUser } from "@/components/dashboard/SidebarUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { collections, items } from "@/lib/mock-data";

const RECENT_COLLECTIONS_LIMIT = 5;

const MAIN_NAV = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid, count: null },
  {
    label: "Favorites",
    href: "/favorites",
    icon: Star,
    count: items.filter((item) => item.isFavorite).length,
  },
  {
    label: "All collections",
    href: "/collections",
    icon: Folder,
    count: collections.length,
  },
];

const FAVORITE_COLLECTIONS = collections.filter((c) => c.isFavorite);

// Favorites already have their own group, so recent shows the rest
const RECENT_COLLECTIONS = collections
  .filter((c) => !c.isFavorite)
  .toSorted((a, b) => b.updatedAt.localeCompare(a.updatedAt))
  .slice(0, RECENT_COLLECTIONS_LIMIT);

export function AppSidebar() {
  const pathname = usePathname();
  const { isMobile, setOpenMobile } = useSidebar();

  // Close the mobile drawer after picking a link
  const handleNavigate = () => {
    if (isMobile) setOpenMobile(false);
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 flex-row items-center gap-2.5 border-b px-3">
        <Link
          href="/dashboard"
          onClick={handleNavigate}
          className="flex min-w-0 flex-1 items-center gap-2.5 group-data-[collapsible=icon]:flex-none"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-foreground font-mono text-[13px] font-bold text-background">
            dn
          </span>
          <span className="truncate text-[15px] font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            DevNotes
          </span>
        </Link>
        <SidebarTrigger
          title="Collapse sidebar"
          className="text-muted-foreground group-data-[collapsible=icon]:hidden"
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {MAIN_NAV.map((nav) => (
              <SidebarMenuItem key={nav.href}>
                <SidebarMenuButton
                  tooltip={nav.label}
                  isActive={pathname === nav.href}
                  onClick={handleNavigate}
                  render={<Link href={nav.href} />}
                >
                  <nav.icon />
                  <span>{nav.label}</span>
                </SidebarMenuButton>
                {nav.count !== null && (
                  <SidebarMenuBadge className="font-mono text-muted-foreground">
                    {nav.count}
                  </SidebarMenuBadge>
                )}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarTypes onNavigate={handleNavigate} />
        <SidebarCollections
          label="Favorite collections"
          collections={FAVORITE_COLLECTIONS}
          onNavigate={handleNavigate}
        />
        <SidebarCollections
          label="Recent collections"
          collections={RECENT_COLLECTIONS}
          onNavigate={handleNavigate}
        />
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarUser onNavigate={handleNavigate} />
      </SidebarFooter>
    </Sidebar>
  );
}
