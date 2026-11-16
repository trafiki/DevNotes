import {
  Code,
  File,
  Image,
  Link,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
  type LucideProps,
} from "lucide-react";

// Item types store their Lucide icon by name
const TYPE_ICONS: Record<string, LucideIcon> = {
  Code,
  Sparkles,
  StickyNote,
  Terminal,
  Link,
  File,
  Image,
};

interface TypeIconProps extends LucideProps {
  name: string;
}

export function TypeIcon({ name, ...props }: TypeIconProps) {
  const Icon = TYPE_ICONS[name] ?? File;
  return <Icon {...props} />;
}
