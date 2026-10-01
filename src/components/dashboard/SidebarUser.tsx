"use client";

import Link from "next/link";
import { Settings } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { currentUser } from "@/lib/mock-data";

interface SidebarUserProps {
  onNavigate: () => void;
}

export function SidebarUser({ onNavigate }: SidebarUserProps) {
  const initials = currentUser.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const storagePercent = Math.round(
    (currentUser.storageUsedGb / currentUser.storageLimitGb) * 100,
  );

  return (
    <>
      <div className="flex flex-col gap-2 rounded-lg border bg-card p-3 group-data-[collapsible=icon]:hidden">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Storage</span>
          <span className="font-mono">
            {currentUser.storageUsedGb} / {currentUser.storageLimitGb} GB
          </span>
        </div>
        <div className="h-1 overflow-hidden rounded bg-input">
          {/* Width depends on data, so it can't be a Tailwind class */}
          <div
            className="h-full rounded bg-foreground"
            style={{ width: `${storagePercent}%` }}
          />
        </div>
      </div>

      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            tooltip="Settings"
            onClick={onNavigate}
            render={<Link href="/settings" />}
          >
            <Avatar className="size-8">
              {currentUser.image && <AvatarImage src={currentUser.image} />}
              <AvatarFallback className="text-xs font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="truncate text-sm font-medium">
                {currentUser.name}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {currentUser.isPro ? "Pro plan" : "Free plan"}
              </span>
            </div>
            <Settings className="text-muted-foreground" />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
}
