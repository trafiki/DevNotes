import { Copy, Star } from "lucide-react";

import { formatRelativeTime } from "@/lib/format";
import { TypeIcon } from "@/lib/item-type-icons";
import type { MockItem, MockItemType } from "@/lib/mock-data";

interface ItemCardProps {
  item: MockItem;
  type?: MockItemType;
  showPreview?: boolean;
}

// First lines of the content, or the URL / file name for non-text items
function getPreview(item: MockItem) {
  if (item.content) return item.content.split("\n").slice(0, 3).join("\n");
  return item.url ?? item.fileName ?? "";
}

export function ItemCard({ item, type, showPreview = false }: ItemCardProps) {
  const color = type?.color ?? "#6b7280";
  const preview = showPreview ? getPreview(item) : "";

  return (
    // Display only: opening the item drawer and copying come later
    <article
      // Type colors come from data, so they can't be Tailwind classes
      style={{ borderColor: `${color}40` }}
      className="flex min-w-0 flex-col gap-2.5 rounded-xl border bg-card px-3.5 pt-3.5 pb-3 transition duration-150 hover:-translate-y-0.5 hover:bg-[#141417]"
    >
      <div className="flex items-start gap-2.5">
        <div
          className="flex size-7.5 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}1f`, color }}
        >
          <TypeIcon name={type?.icon ?? "File"} className="size-4" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <h3 className="truncate text-sm font-semibold">{item.title}</h3>
          <p className="truncate text-[12.5px] text-muted-foreground">
            {item.description}
          </p>
        </div>
        {item.isFavorite && (
          <Star
            aria-label="Favorite"
            className="mt-0.5 size-3.5 shrink-0 fill-amber-400 text-amber-400"
          />
        )}
      </div>

      {preview && (
        <pre className="h-[70px] overflow-hidden rounded-lg border bg-background px-3 py-2.5 font-mono text-xs leading-relaxed text-zinc-400">
          {preview}
        </pre>
      )}

      <div className="flex min-w-0 items-center gap-1.5">
        <div className="flex min-w-0 flex-1 gap-1.5 overflow-hidden">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[5px] bg-muted px-1.5 py-0.5 font-mono text-[11px] font-medium whitespace-nowrap text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
        <time
          dateTime={item.lastUsedAt}
          className="text-[11.5px] whitespace-nowrap text-muted-foreground/70"
        >
          {formatRelativeTime(item.lastUsedAt)}
        </time>
        <button
          type="button"
          aria-label={`Copy ${item.title}`}
          className="flex size-6.5 items-center justify-center rounded-md text-muted-foreground/70 hover:bg-accent hover:text-foreground"
        >
          <Copy className="size-3.5" />
        </button>
      </div>
    </article>
  );
}
