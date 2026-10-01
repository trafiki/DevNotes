// Mock data for the dashboard UI until the database is implemented.
// Field names follow the Prisma schema in _context/project-overview.md.

export type ContentType = "TEXT" | "URL" | "FILE";

export type MockUser = {
  id: string;
  name: string;
  email: string;
  image: string | null;
  isPro: boolean;
  storageUsedGb: number;
  storageLimitGb: number;
};

export type MockItemType = {
  id: string;
  name: string;
  slug: string;
  icon: string; // Lucide icon name
  color: string;
  contentType: ContentType;
  isSystem: boolean;
  isProOnly: boolean;
  itemCount: number;
};

export type MockCollection = {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  itemCount: number;
  typeIds: string[]; // item types shown as icons on the card
  colorTypeId: string; // most common item type, sets the card color
  updatedAt: string;
};

export type MockItem = {
  id: string;
  itemTypeId: string;
  title: string;
  description: string;
  content?: string;
  language?: string;
  url?: string;
  fileName?: string;
  fileSize?: number; // bytes
  fileMimeType?: string;
  isFavorite: boolean;
  isPinned: boolean;
  tags: string[];
  collectionIds: string[];
  lastUsedAt: string;
  createdAt: string;
  updatedAt: string;
};

export const currentUser: MockUser = {
  id: "user_1",
  name: "Alex Rivera",
  email: "alex@example.com",
  image: null,
  isPro: true,
  storageUsedGb: 1.2,
  storageLimitGb: 5,
};

export const itemTypes: MockItemType[] = [
  {
    id: "snippet",
    name: "Snippet",
    slug: "snippets",
    icon: "Code",
    color: "#3b82f6",
    contentType: "TEXT",
    isSystem: true,
    isProOnly: false,
    itemCount: 38,
  },
  {
    id: "prompt",
    name: "Prompt",
    slug: "prompts",
    icon: "Sparkles",
    color: "#8b5cf6",
    contentType: "TEXT",
    isSystem: true,
    isProOnly: false,
    itemCount: 24,
  },
  {
    id: "note",
    name: "Note",
    slug: "notes",
    icon: "StickyNote",
    color: "#fde047",
    contentType: "TEXT",
    isSystem: true,
    isProOnly: false,
    itemCount: 19,
  },
  {
    id: "command",
    name: "Command",
    slug: "commands",
    icon: "Terminal",
    color: "#f97316",
    contentType: "TEXT",
    isSystem: true,
    isProOnly: false,
    itemCount: 27,
  },
  {
    id: "link",
    name: "Link",
    slug: "links",
    icon: "Link",
    color: "#10b981",
    contentType: "URL",
    isSystem: true,
    isProOnly: false,
    itemCount: 31,
  },
  {
    id: "file",
    name: "File",
    slug: "files",
    icon: "File",
    color: "#6b7280",
    contentType: "FILE",
    isSystem: true,
    isProOnly: true,
    itemCount: 8,
  },
  {
    id: "image",
    name: "Image",
    slug: "images",
    icon: "Image",
    color: "#ec4899",
    contentType: "FILE",
    isSystem: true,
    isProOnly: true,
    itemCount: 6,
  },
];

export const collections: MockCollection[] = [
  {
    id: "react",
    name: "React Patterns",
    description: "Hooks, composition patterns and component recipes.",
    isFavorite: true,
    itemCount: 14,
    typeIds: ["snippet", "note", "link"],
    colorTypeId: "snippet",
    updatedAt: "2026-09-30T09:48:00Z",
  },
  {
    id: "prompts",
    name: "Prompt Library",
    description: "System messages and reusable prompts for daily work.",
    isFavorite: true,
    itemCount: 22,
    typeIds: ["prompt", "note"],
    colorTypeId: "prompt",
    updatedAt: "2026-09-28T10:00:00Z",
  },
  {
    id: "devops",
    name: "DevOps Commands",
    description: "Docker, git and shell one-liners I always forget.",
    isFavorite: false,
    itemCount: 17,
    typeIds: ["command", "snippet"],
    colorTypeId: "command",
    updatedAt: "2026-09-30T07:00:00Z",
  },
  {
    id: "context",
    name: "Context Files",
    description: "Project context and rules files for AI coding agents.",
    isFavorite: false,
    itemCount: 8,
    typeIds: ["file", "prompt"],
    colorTypeId: "file",
    updatedAt: "2026-09-25T10:00:00Z",
  },
  {
    id: "interview",
    name: "Interview Prep",
    description: "Concepts, explanations and practice snippets.",
    isFavorite: false,
    itemCount: 9,
    typeIds: ["note", "snippet"],
    colorTypeId: "note",
    updatedAt: "2026-09-27T10:00:00Z",
  },
  {
    id: "reading",
    name: "Reading List",
    description: "Docs, articles and references worth revisiting.",
    isFavorite: false,
    itemCount: 26,
    typeIds: ["link"],
    colorTypeId: "link",
    updatedAt: "2026-09-29T12:00:00Z",
  },
];

export const items: MockItem[] = [
  {
    id: "i1",
    itemTypeId: "snippet",
    title: "useDebounce hook",
    description: "Debounce any fast-changing value in React.",
    language: "typescript",
    content: `import { useEffect, useState } from 'react';

// Returns the value after it stops changing for \`delay\` ms
export function useDebounce<T>(value: T, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

 return debounced;
}`,
    isFavorite: true,
    isPinned: true,
    tags: ["react", "hooks"],
    collectionIds: ["react", "interview"],
    lastUsedAt: "2026-09-30T09:48:00Z",
    createdAt: "2026-08-14T10:00:00Z",
    updatedAt: "2026-09-22T10:00:00Z",
  },
  {
    id: "i2",
    itemTypeId: "prompt",
    title: "Code review assistant",
    description: "Structured review focused on bugs, security and readability.",
    language: "markdown",
    content: `You are a senior engineer reviewing a pull request.

For the diff below:
1. List bugs or edge cases, most severe first.
2. Flag security issues (injection, auth, secrets).
3. Suggest readability improvements.

Be concise. Quote the exact line for every point.

{{diff}}`,
    isFavorite: false,
    isPinned: true,
    tags: ["review", "system"],
    collectionIds: ["prompts"],
    lastUsedAt: "2026-09-30T09:00:00Z",
    createdAt: "2026-07-02T10:00:00Z",
    updatedAt: "2026-09-18T10:00:00Z",
  },
  {
    id: "i3",
    itemTypeId: "command",
    title: "Docker full cleanup",
    description: "Remove all stopped containers, images, networks and volumes.",
    language: "bash",
    content: `# Frees disk space — removes EVERYTHING unused
docker system prune -af --volumes

# Check what's left
docker system df`,
    isFavorite: true,
    isPinned: true,
    tags: ["docker"],
    collectionIds: ["devops"],
    lastUsedAt: "2026-09-30T07:00:00Z",
    createdAt: "2026-05-19T10:00:00Z",
    updatedAt: "2026-05-19T10:00:00Z",
  },
  {
    id: "i4",
    itemTypeId: "snippet",
    title: "Prisma + Neon client",
    description: "Singleton Prisma 7 client with the Neon driver adapter.",
    language: "typescript",
    content: `import { PrismaClient } from '@/generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const g = globalThis as unknown as { prisma?: PrismaClient };

function createClient() {
  const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter });
}

export const prisma = g.prisma ?? createClient();`,
    isFavorite: false,
    isPinned: false,
    tags: ["prisma", "neon"],
    collectionIds: ["react"],
    lastUsedAt: "2026-09-30T05:00:00Z",
    createdAt: "2026-09-01T10:00:00Z",
    updatedAt: "2026-09-27T10:00:00Z",
  },
  {
    id: "i5",
    itemTypeId: "command",
    title: "Undo last commit, keep changes",
    description: "Soft reset — changes stay staged.",
    language: "bash",
    content: "git reset --soft HEAD~1",
    isFavorite: false,
    isPinned: false,
    tags: ["git"],
    collectionIds: ["devops"],
    lastUsedAt: "2026-09-29T16:00:00Z",
    createdAt: "2026-03-03T10:00:00Z",
    updatedAt: "2026-03-03T10:00:00Z",
  },
  {
    id: "i6",
    itemTypeId: "link",
    title: "Tailwind CSS v4 docs",
    description: "Theme variables, @theme and the new config-less setup.",
    url: "https://tailwindcss.com/docs/theme",
    isFavorite: true,
    isPinned: false,
    tags: ["css", "docs"],
    collectionIds: ["reading"],
    lastUsedAt: "2026-09-29T12:00:00Z",
    createdAt: "2026-06-11T10:00:00Z",
    updatedAt: "2026-06-11T10:00:00Z",
  },
  {
    id: "i7",
    itemTypeId: "prompt",
    title: "Senior Next.js system prompt",
    description: "App Router, server components, strict TypeScript.",
    language: "markdown",
    content: `You are an expert Next.js 16 engineer.

- Prefer server components; add 'use client' only when needed.
- Use server actions for mutations.
- Strict TypeScript, no \`any\`.
- Tailwind v4 + shadcn/ui for styling.`,
    isFavorite: false,
    isPinned: false,
    tags: ["nextjs", "system"],
    collectionIds: ["prompts", "context"],
    lastUsedAt: "2026-09-28T10:00:00Z",
    createdAt: "2026-04-28T10:00:00Z",
    updatedAt: "2026-09-10T10:00:00Z",
  },
  {
    id: "i8",
    itemTypeId: "note",
    title: "The JS event loop, explained",
    description: "Call stack, microtasks vs macrotasks, and ordering.",
    language: "markdown",
    content: `## Event loop

1. Run the current call stack to completion.
2. Drain the microtask queue (Promises, queueMicrotask).
3. Render if needed.
4. Take ONE macrotask (setTimeout, I/O) and repeat.

Microtasks always run before the next timer.`,
    isFavorite: false,
    isPinned: false,
    tags: ["javascript", "interview"],
    collectionIds: ["interview"],
    lastUsedAt: "2026-09-27T10:00:00Z",
    createdAt: "2026-02-07T10:00:00Z",
    updatedAt: "2026-08-30T10:00:00Z",
  },
  {
    id: "i9",
    itemTypeId: "snippet",
    title: "Retry decorator with backoff",
    description: "Exponential backoff for flaky network calls.",
    language: "python",
    content: `import time, functools

def retry(times=3, base=0.5):
    def wrap(fn):
        @functools.wraps(fn)
        def inner(*a, **kw):
            for i in range(times):
                try:
                    return fn(*a, **kw)
                except Exception:
                    if i == times - 1: raise
                    time.sleep(base * 2 ** i)
        return inner
    return wrap`,
    isFavorite: false,
    isPinned: false,
    tags: ["python"],
    collectionIds: ["interview"],
    lastUsedAt: "2026-09-26T10:00:00Z",
    createdAt: "2026-01-22T10:00:00Z",
    updatedAt: "2026-01-22T10:00:00Z",
  },
  {
    id: "i10",
    itemTypeId: "file",
    title: "project-context.md",
    description: "Architecture and conventions for AI agents.",
    fileName: "project-context.md",
    fileSize: 14541,
    fileMimeType: "text/markdown",
    isFavorite: false,
    isPinned: false,
    tags: ["context", "ai"],
    collectionIds: ["context"],
    lastUsedAt: "2026-09-25T10:00:00Z",
    createdAt: "2026-09-05T10:00:00Z",
    updatedAt: "2026-09-21T10:00:00Z",
  },
  {
    id: "i11",
    itemTypeId: "image",
    title: "System architecture diagram",
    description: "Request flow: Next.js → Neon → R2.",
    fileName: "architecture.png",
    fileSize: 1887437,
    fileMimeType: "image/png",
    isFavorite: false,
    isPinned: false,
    tags: ["architecture"],
    collectionIds: ["context"],
    lastUsedAt: "2026-09-23T10:00:00Z",
    createdAt: "2026-08-02T10:00:00Z",
    updatedAt: "2026-08-02T10:00:00Z",
  },
  {
    id: "i12",
    itemTypeId: "link",
    title: "shadcn/ui components",
    description: "Copy-paste accessible components built on Radix.",
    url: "https://ui.shadcn.com/docs/components",
    isFavorite: false,
    isPinned: false,
    tags: ["ui", "docs"],
    collectionIds: ["reading", "react"],
    lastUsedAt: "2026-09-23T08:00:00Z",
    createdAt: "2026-05-30T10:00:00Z",
    updatedAt: "2026-05-30T10:00:00Z",
  },
];
