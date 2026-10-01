"use client";

import Link from "next/link";
import {
  Code,
  File,
  Image,
  Link as LinkIcon,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { itemTypes } from "@/lib/mock-data";

// Item types store their Lucide icon by name
const TYPE_ICONS: Record<string, LucideIcon> = {
  Code,
  Sparkles,
  StickyNote,
  Terminal,
  Link: LinkIcon,
  File,
  Image,
};

interface SidebarTypesProps {
  onNavigate: () => void;
}

export function SidebarTypes({ onNavigate }: SidebarTypesProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-mono tracking-wider uppercase">
        Types
      </SidebarGroupLabel>
      <SidebarMenu>
        {itemTypes.map((type) => {
          const Icon = TYPE_ICONS[type.icon] ?? File;
          return (
            <SidebarMenuItem key={type.id}>
              <SidebarMenuButton
                tooltip={`${type.name}s`}
                onClick={onNavigate}
                render={<Link href={`/items/${type.slug}`} />}
                className="text-sidebar-foreground/75 hover:text-sidebar-foreground"
              >
                {/* Type colors come from data, so they can't be Tailwind classes */}
                <Icon style={{ color: type.color }} />
                <span>{type.name}s</span>
              </SidebarMenuButton>
              <SidebarMenuBadge className="gap-2 font-mono text-muted-foreground">
                {type.isProOnly && (
                  <span className="rounded border border-input px-1 text-[9.5px] leading-4 font-semibold">
                    PRO
                  </span>
                )}
                {type.itemCount}
              </SidebarMenuBadge>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
