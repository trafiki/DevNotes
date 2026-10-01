import { FolderPlus, Plus, Search } from "lucide-react";

import { SidebarToggle } from "@/components/dashboard/SidebarToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd } from "@/components/ui/kbd";

// Display only for now: search and the create buttons are wired up in later features.
export function TopBar() {
  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2.5 border-b bg-background/80 px-4 backdrop-blur-md md:px-8">
      <SidebarToggle />
      <div className="relative max-w-[520px] min-w-0 flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search items, tags, collections…"
          aria-label="Search"
          className="h-9 border-border bg-card pr-12 pl-9 dark:bg-card"
        />
        <Kbd className="absolute top-1/2 right-2.5 -translate-y-1/2 border border-input font-mono">
          ⌘K
        </Kbd>
      </div>

      <div className="flex-1" />

      <Button variant="outline" size="lg" className="hidden sm:inline-flex">
        <FolderPlus />
        New collection
      </Button>
      <Button size="lg" className="font-semibold" aria-label="New item">
        <Plus />
        <span className="hidden sm:inline">New item</span>
      </Button>
    </header>
  );
}
