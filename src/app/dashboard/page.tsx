import Link from "next/link";
import {
  ChevronRight,
  Clock,
  Folder,
  FolderHeart,
  Layers,
  Pin,
  Star,
  type LucideIcon,
} from "lucide-react";

import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { ItemCard } from "@/components/dashboard/ItemCard";
import { StatsCards, type Stat } from "@/components/dashboard/StatsCards";
import { collections, itemTypes, items } from "@/lib/mock-data";

const RECENT_ITEMS_LIMIT = 10;

const typeById = new Map(itemTypes.map((type) => [type.id, type]));

const totalItems = itemTypes.reduce((sum, type) => sum + type.itemCount, 0);

const stats: Stat[] = [
  { label: "Items", value: totalItems, icon: Layers },
  { label: "Collections", value: collections.length, icon: Folder },
  {
    label: "Favorite items",
    value: items.filter((item) => item.isFavorite).length,
    icon: Star,
  },
  {
    label: "Favorite collections",
    value: collections.filter((collection) => collection.isFavorite).length,
    icon: FolderHeart,
  },
];

const recentCollections = collections.toSorted((a, b) =>
  b.updatedAt.localeCompare(a.updatedAt),
);

const pinnedItems = items.filter((item) => item.isPinned);

const recentItems = items
  .toSorted((a, b) => b.lastUsedAt.localeCompare(a.lastUsedAt))
  .slice(0, RECENT_ITEMS_LIMIT);

function SectionHeading({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-[15px] font-semibold">
      <Icon className="size-4 text-muted-foreground" />
      {children}
    </h2>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex w-full max-w-[1440px] flex-col gap-10 px-4 pt-7 pb-16 md:px-8">
      <div className="flex flex-col gap-1.5">
        <h1 className="text-[26px] font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          {totalItems} items across {collections.length} collections
        </p>
      </div>

      <StatsCards stats={stats} />

      <section className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between">
          <SectionHeading icon={Folder}>Collections</SectionHeading>
          <Link
            href="/collections"
            className="flex items-center gap-1 text-[13px] text-muted-foreground hover:text-foreground"
          >
            View all
            <ChevronRight className="size-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {recentCollections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              colorType={typeById.get(collection.colorTypeId)}
              types={collection.typeIds.flatMap((id) => typeById.get(id) ?? [])}
            />
          ))}
        </div>
      </section>

      {pinnedItems.length > 0 && (
        <section className="flex flex-col gap-3.5">
          <SectionHeading icon={Pin}>Pinned</SectionHeading>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-3">
            {pinnedItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                type={typeById.get(item.itemTypeId)}
                showPreview
              />
            ))}
          </div>
        </section>
      )}

      <section className="flex flex-col gap-3.5">
        <SectionHeading icon={Clock}>Recently used</SectionHeading>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-3">
          {recentItems.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              type={typeById.get(item.itemTypeId)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
