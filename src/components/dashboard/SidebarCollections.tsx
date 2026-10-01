"use client";

import Link from "next/link";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { itemTypes, type MockCollection } from "@/lib/mock-data";

interface SidebarCollectionsProps {
  label: string;
  collections: MockCollection[];
  onNavigate: () => void;
}

export function SidebarCollections({
  label,
  collections,
  onNavigate,
}: SidebarCollectionsProps) {
  if (collections.length === 0) return null;

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="font-mono tracking-wider uppercase">
        {label}
      </SidebarGroupLabel>
      <SidebarMenu>
        {collections.map((collection) => {
          const color = itemTypes.find(
            (type) => type.id === collection.colorTypeId,
          )?.color;
          return (
            <SidebarMenuItem key={collection.id}>
              <SidebarMenuButton
                tooltip={collection.name}
                onClick={onNavigate}
                render={<Link href={`/collections/${collection.id}`} />}
                className="text-sidebar-foreground/75 hover:text-sidebar-foreground"
              >
                <span className="flex size-4 shrink-0 items-center justify-center">
                  {/* Collection color comes from data, so it can't be a Tailwind class */}
                  <span
                    className="size-2 rounded-[3px]"
                    style={{ backgroundColor: color }}
                  />
                </span>
                <span>{collection.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
