import Link from "next/link";
import { Ellipsis, Star } from "lucide-react";

import { TypeIcon } from "@/lib/item-type-icons";
import type { MockCollection, MockItemType } from "@/lib/mock-data";

interface CollectionCardProps {
  collection: MockCollection;
  colorType?: MockItemType; // most common item type, sets the card color
  types: MockItemType[]; // item types the collection holds
}

export function CollectionCard({
  collection,
  colorType,
  types,
}: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.id}`}
      // Type colors come from data, so they can't be Tailwind classes
      style={{ borderColor: colorType ? `${colorType.color}66` : undefined }}
      className="flex min-h-39 flex-col gap-3.5 rounded-xl border bg-card p-4 transition duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)]"
    >
      {/* Display only: favorite toggle and the actions menu come later */}
      <div className="flex items-center justify-end gap-2" aria-hidden>
        {collection.isFavorite && (
          <Star className="size-3.5 fill-amber-400 text-amber-400" />
        )}
        <Ellipsis className="size-4 text-muted-foreground/70" />
      </div>

      <div className="flex flex-1 flex-col gap-1">
        <h3 className="text-[15px] font-semibold tracking-tight">
          {collection.name}
        </h3>
        <p className="text-[13px] leading-normal text-pretty text-muted-foreground">
          {collection.description}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {types.map((type) => (
            <TypeIcon
              key={type.id}
              name={type.icon}
              aria-label={type.name}
              className="size-3.5"
              style={{ color: type.color }}
            />
          ))}
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          {collection.itemCount} items
        </span>
      </div>
    </Link>
  );
}
