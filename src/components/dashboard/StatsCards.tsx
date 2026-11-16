import type { LucideIcon } from "lucide-react";

export interface Stat {
  label: string;
  value: number;
  icon: LucideIcon;
}

interface StatsCardsProps {
  stats: Stat[];
}

export function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col gap-3 rounded-xl border bg-card p-4"
        >
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <Icon className="size-4 shrink-0" />
            <span className="truncate">{label}</span>
          </div>
          <div className="font-mono text-2xl font-semibold tracking-tight">
            {value}
          </div>
        </div>
      ))}
    </div>
  );
}
