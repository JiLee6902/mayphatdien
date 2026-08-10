# PMC Website — Phase 1: Foundation + Homepage — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a deployable, tested Next.js static site shell with the design system, global layout (header, footer, floating contact buttons) and a homepage using the approved equipment-display mockup, live on a Cloudflare Pages preview URL.

**Architecture:** Next.js 15 App Router with static export (`output: 'export'`). Tailwind CSS holds the design tokens (navy/teal + accent orange, Be Vietnam Pro). Presentational components live under `src/components/`; site-wide data (hotline, Zalo, addresses) lives in one typed config module. Logic-bearing units are TDD'd with Vitest + React Testing Library; pure presentational components get render smoke tests. Deploy is `wrangler pages deploy out`.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS v4, Vitest, @testing-library/react, jsdom, Cloudflare Pages (wrangler).

**Roadmap context:** This is Phase 1 of 4 (Foundation → CMS → Pages → SEO). Phases 2–4 get their own plans. Spec: `docs/superpowers/specs/2026-08-10-pmc-website-design.md`.

---

### Task 1: Scaffold Next.js project with static export

**Files:**
- Create: `package.json`, `next.config.mjs`, `tsconfig.json`, `src/app/layout.tsx`, `src/app/page.tsx`
- Modify: `.gitignore` (already present)

- [ ] **Step 1: Scaffold the app**

Run in the project root (`/Users/mac/pmc-website`):
```bash
npx create-next-app@latest . --typescript --app --tailwind --eslint --src-dir --import-alias "@/*" --no-turbopack --use-npm
```
When prompted about the non-empty directory (docs/, mockups/, .git exist), choose to continue/overwrite conflicting scaffold files only. Keep existing `docs/`, `mockups/`, `.gitignore`.

- [ ] **Step 2: Configure static export**

Replace `next.config.mjs` with:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for static export; we ship pre-optimized assets
  trailingSlash: true,           // stable URLs for a static host
};
export default nextConfig;
```

- [ ] **Step 3: Verify the build produces static HTML**

Run:
```bash
npm run build
```
Expected: build succeeds and an `out/` directory is created containing `index.html`.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js app with static export"
```

---

### Task 2: Set up the test runner (Vitest + React Testing Library)

**Files:**
- Create: `vitest.config.ts`, `src/test/setup.ts`, `src/test/smoke.test.ts`
- Modify: `package.json` (add `test` script)

- [ ] **Step 1: Install dev dependencies**

```bash
npm install -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

- [ ] **Step 2: Write the failing test**

Create `src/test/smoke.test.ts`:
```ts
import { describe, it, expect } from 'vitest';

describe('test runner', () => {
  it('runs and does arithmetic', () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 3: Add config and setup**

Create `vitest.config.ts`:
```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
```

Create `src/test/setup.ts`:
```ts
import '@testing-library/jest-dom/vitest';
```

Add to `package.json` `"scripts"`:
```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test`
Expected: 1 passed (smoke.test.ts).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "test: add Vitest + React Testing Library setup"
```

---

### Task 3: Design tokens (colors + Be Vietnam Pro font)

**Files:**
- Modify: `src/app/globals.css`, `src/app/layout.tsx`

- [ ] **Step 1: Define CSS design tokens**

Replace the contents of `src/app/globals.css` with:
```css
@import "tailwindcss";

@theme {
  --color-navy: #12314f;
  --color-navy-dark: #0d2740;
  --color-steel: #3a5a7a;
  --color-accent: #e2811c;
  --color-accent-dark: #c96e11;
  --color-ink: #1b2733;
  --color-muted: #5f7183;
  --color-line: #e5eaf0;
  --color-bg: #f3f6f9;
  --color-ok: #177a48;
  --font-sans: "Be Vietnam Pro", system-ui, sans-serif;
}

html { scroll-behavior: smooth; }
body { background: var(--color-bg); color: var(--color-ink); }
```

- [ ] **Step 2: Load the font in the root layout**

Replace `src/app/layout.tsx` with:
```tsx
import type { Metadata } from 'next';
import { Be_Vietnam_Pro } from 'next/font/google';
import './globals.css';

const beVietnam = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-be-vietnam',
});

export const metadata: Metadata = {
  title: 'PMC — Cho thuê máy phát điện, máy nén khí, thiết bị công nghiệp',
  description:
    'PMC cho thuê máy phát điện, máy nén khí, thiết bị phun rửa áp lực cao (UHP) và máy hàn. Khảo sát, lắp đặt tận công trình. Hotline 0936 899 431.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={beVietnam.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Verify build still succeeds**

Run: `npm run build`
Expected: build succeeds, no font/CSS errors.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add design tokens and Be Vietnam Pro font"
```

---

### Task 4: Typed site config (hotline, Zalo, locations)

**Files:**
- Create: `src/config/site.ts`, `src/config/site.test.ts`

- [ ] **Step 1: Write the failing test**

Create `src/config/site.test.ts`:
```ts
import { describe, it, expect } from 'vitest';
import { site, telHref } from './site';

describe('site config', () => {
  it('exposes a hotline as digits only for tel: links', () => {
    expect(telHref(site.hotline)).toBe('tel:0936899431');
  });

  it('has two locations with full NAP', () => {
    expect(site.locations).toHaveLength(2);
    for (const loc of site.locations) {
      expect(loc.name).toBeTruthy();
      expect(loc.address).toBeTruthy();
      expect(loc.phone).toMatch(/^0\d{9,10}$/); // digits only, no spaces
    }
  });

  it('has a Zalo link', () => {
    expect(site.zaloUrl).toMatch(/^https:\/\/zalo\.me\//);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/config/site.test.ts`
Expected: FAIL with "Cannot find module './site'".

- [ ] **Step 3: Write the implementation**

Create `src/config/site.ts`:
```ts
export interface Location {
  name: string;
  address: string;
  phone: string; // digits only
}

export const site = {
  companyName: 'Công ty TNHH P.M.C',
  brand: 'PMC',
  hotline: '0936899431',
  email: 'pmc@pmcvn.com',
  zaloUrl: 'https://zalo.me/0936899431',
  locations: [
    {
      name: 'Văn phòng TP.HCM',
      address: '246/40A11 Xô Viết Nghệ Tĩnh, P.21, Q.Bình Thạnh, TP.HCM',
      phone: '02835141558',
    },
    {
      name: 'Trụ sở Vũng Tàu',
      address: '1591A Đường 30/4, P.12, TP Vũng Tàu, BR-VT',
      phone: '02543839699',
    },
  ] as Location[],
} as const;

/** Convert a digits-only phone into a clean tel: href (no spaces). */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\D/g, '')}`;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/config/site.test.ts`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add typed site config with clean tel: helper"
```

---

### Task 5: Button primitive (TDD)

**Files:**
- Create: `src/components/ui/Button.tsx`, `src/components/ui/Button.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/ui/Button.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders as a link when href is provided', () => {
    render(<Button href="tel:0936899431">Gọi ngay</Button>);
    const el = screen.getByRole('link', { name: 'Gọi ngay' });
    expect(el).toHaveAttribute('href', 'tel:0936899431');
  });

  it('renders as a button when no href is provided', () => {
    render(<Button>Gửi</Button>);
    expect(screen.getByRole('button', { name: 'Gửi' })).toBeInTheDocument();
  });

  it('applies the accent variant class', () => {
    render(<Button variant="accent">X</Button>);
    expect(screen.getByRole('button', { name: 'X' }).className).toContain('bg-accent');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/ui/Button.test.tsx`
Expected: FAIL with "Cannot find module './Button'".

- [ ] **Step 3: Write the implementation**

Create `src/components/ui/Button.tsx`:
```tsx
import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'accent' | 'outline';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-bold px-5 py-3 text-sm transition-colors';
const variants: Record<Variant, string> = {
  accent: 'bg-accent text-white hover:bg-accent-dark',
  outline: 'border border-line text-navy hover:border-steel',
};

export function Button({
  children,
  href,
  variant = 'accent',
  className = '',
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/ui/Button.test.tsx`
Expected: PASS (3 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add Button UI primitive"
```

---

### Task 6: Floating contact buttons (Hotline + Zalo)

**Files:**
- Create: `src/components/FloatingContact.tsx`, `src/components/FloatingContact.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/FloatingContact.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FloatingContact } from './FloatingContact';

describe('FloatingContact', () => {
  it('renders a clean tel: link (no spaces) and a Zalo link', () => {
    render(<FloatingContact />);
    expect(screen.getByRole('link', { name: /gọi ngay/i })).toHaveAttribute(
      'href',
      'tel:0936899431',
    );
    expect(screen.getByRole('link', { name: /zalo/i })).toHaveAttribute(
      'href',
      'https://zalo.me/0936899431',
    );
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/FloatingContact.test.tsx`
Expected: FAIL with "Cannot find module './FloatingContact'".

- [ ] **Step 3: Write the implementation**

Create `src/components/FloatingContact.tsx`:
```tsx
import { site, telHref } from '@/config/site';

export function FloatingContact() {
  return (
    <div className="fixed right-5 bottom-6 z-50 flex flex-col gap-3">
      <a
        href={telHref(site.hotline)}
        className="flex items-center gap-2 rounded-full bg-accent px-4 py-3 font-bold text-white shadow-lg hover:bg-accent-dark"
      >
        <span aria-hidden>📞</span>
        <span>Gọi ngay</span>
      </a>
      <a
        href={site.zaloUrl}
        className="flex items-center gap-2 rounded-full bg-navy px-4 py-3 font-bold text-white shadow-lg hover:bg-navy-dark"
      >
        <span aria-hidden>💬</span>
        <span>Zalo</span>
      </a>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/FloatingContact.test.tsx`
Expected: PASS (1 test).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add floating hotline + Zalo contact buttons"
```

---

### Task 7: Header (nav + search placeholder)

**Files:**
- Create: `src/components/Header.tsx`, `src/components/Header.test.tsx`, `src/config/nav.ts`

- [ ] **Step 1: Write the failing test**

Create `src/components/Header.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders brand and the main navigation links', () => {
    render(<Header />);
    expect(screen.getByText('PMC')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Thiết bị' })).toHaveAttribute(
      'href',
      '/thiet-bi/',
    );
    expect(screen.getByRole('link', { name: 'Liên hệ' })).toHaveAttribute(
      'href',
      '/lien-he/',
    );
  });

  it('renders a search input', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText(/tìm/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/Header.test.tsx`
Expected: FAIL with "Cannot find module './Header'".

- [ ] **Step 3: Write nav config and Header**

Create `src/config/nav.ts`:
```ts
export const mainNav = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Thiết bị', href: '/thiet-bi/' },
  { label: 'Dự án', href: '/du-an/' },
  { label: 'Tin tức', href: '/tin-tuc/' },
  { label: 'Giới thiệu', href: '/gioi-thieu/' },
  { label: 'Liên hệ', href: '/lien-he/' },
] as const;
```

Create `src/components/Header.tsx`:
```tsx
import Link from 'next/link';
import { mainNav } from '@/config/nav';
import { site, telHref } from '@/config/site';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_1px_0_var(--color-line)]">
      <div className="bg-navy text-[13px] text-[#c3d3e2]">
        <div className="mx-auto flex h-10 max-w-[1180px] items-center justify-between px-5">
          <span>Cho thuê 24/7 · Khảo sát &amp; lắp đặt tận công trình</span>
          <span>
            Hotline:{' '}
            <a className="font-semibold text-white" href={telHref(site.hotline)}>
              0936 899 431
            </a>
          </span>
        </div>
      </div>
      <div className="mx-auto flex h-[74px] max-w-[1180px] items-center gap-7 px-5">
        <Link href="/" className="text-2xl font-extrabold text-navy">
          {site.brand}
          <span className="ml-1 text-accent">.</span>
        </Link>
        <nav className="ml-2 hidden gap-6 font-semibold text-[#2a3742] md:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="py-1.5 hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2.5 md:flex">
          <span aria-hidden>🔍</span>
          <input
            className="w-56 bg-transparent text-sm outline-none"
            placeholder="Tìm: 100kVA, cummins, máy hàn…"
            aria-label="Tìm thiết bị"
          />
        </div>
        <Button href="/lien-he/" className="hidden md:inline-flex">
          Nhận báo giá
        </Button>
      </div>
    </header>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/Header.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add sticky header with nav and search"
```

---

### Task 8: Footer (full NAP for both locations)

**Files:**
- Create: `src/components/Footer.tsx`, `src/components/Footer.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/components/Footer.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { site } from '@/config/site';

describe('Footer', () => {
  it('renders the legal company name', () => {
    render(<Footer />);
    expect(screen.getByText(new RegExp(site.companyName))).toBeInTheDocument();
  });

  it('renders both location addresses', () => {
    render(<Footer />);
    for (const loc of site.locations) {
      expect(screen.getByText(new RegExp(loc.address.slice(0, 15)))).toBeInTheDocument();
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/Footer.test.tsx`
Expected: FAIL with "Cannot find module './Footer'".

- [ ] **Step 3: Write the implementation**

Create `src/components/Footer.tsx`:
```tsx
import { site, telHref } from '@/config/site';

export function Footer() {
  return (
    <footer className="bg-navy-dark text-[#9fb4c7]">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold text-white">{site.brand}</div>
          <p className="mt-3 text-sm">{site.companyName}</p>
          <p className="mt-2 text-sm">
            Hotline:{' '}
            <a className="font-semibold text-white" href={telHref(site.hotline)}>
              0936 899 431
            </a>
          </p>
        </div>
        {site.locations.map((loc) => (
          <div key={loc.name}>
            <div className="font-semibold text-white">{loc.name}</div>
            <p className="mt-2 text-sm">{loc.address}</p>
            <p className="mt-1 text-sm">
              ĐT:{' '}
              <a className="text-white" href={telHref(loc.phone)}>
                {loc.phone}
              </a>
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[13px]">
        © 2026 {site.companyName}. Đã đăng ký bản quyền.
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/Footer.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add footer with full NAP for both locations"
```

---

### Task 9: Wire header, footer, and floating buttons into the layout

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Add the shell to the layout body**

In `src/app/layout.tsx`, add imports at the top:
```tsx
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingContact } from '@/components/FloatingContact';
```

Replace the `<body>` element with:
```tsx
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
```

- [ ] **Step 2: Verify build succeeds**

Run: `npm run build`
Expected: build succeeds; `out/index.html` contains "PMC" and "Hotline".

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "feat: wire global shell (header/footer/floating) into layout"
```

---

### Task 10: Category card data + CategoryCard component (TDD)

**Files:**
- Create: `src/config/categories.ts`, `src/components/CategoryCard.tsx`, `src/components/CategoryCard.test.tsx`
- Copy assets: from `mockups/img/` into `public/images/categories/`

- [ ] **Step 1: Copy the approved category images into public assets**

```bash
mkdir -p public/images/categories
cp mockups/img/cat-genset.jpg public/images/categories/may-phat-dien.jpg
cp mockups/img/cat-compressor.jpg public/images/categories/may-nen-khi.jpg
cp mockups/img/cat-uhp.jpg public/images/categories/phun-rua-uhp.jpg
cp mockups/img/cat-welder.jpg public/images/categories/may-han.jpg
```

- [ ] **Step 2: Write the failing test**

Create `src/components/CategoryCard.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CategoryCard } from './CategoryCard';

describe('CategoryCard', () => {
  it('links to the category page and shows name + meta', () => {
    render(
      <CategoryCard
        category={{
          slug: 'may-phat-dien',
          name: 'Máy phát điện',
          meta: '10 – 1500 kVA · 40+ máy',
          image: '/images/categories/may-phat-dien.jpg',
        }}
      />,
    );
    const link = screen.getByRole('link', { name: /máy phát điện/i });
    expect(link).toHaveAttribute('href', '/cho-thue-may-phat-dien/');
    expect(screen.getByText('10 – 1500 kVA · 40+ máy')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Cho thuê Máy phát điện');
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run src/components/CategoryCard.test.tsx`
Expected: FAIL with "Cannot find module './CategoryCard'".

- [ ] **Step 4: Write category data and the component**

Create `src/config/categories.ts`:
```ts
export interface Category {
  slug: string;   // used to build /cho-thue-<slug>/
  name: string;
  meta: string;
  image: string;
}

export const categories: Category[] = [
  { slug: 'may-phat-dien', name: 'Máy phát điện', meta: '10 – 1500 kVA · Cummins, Mitsubishi, Denyo, MTU · 40+ máy', image: '/images/categories/may-phat-dien.jpg' },
  { slug: 'may-nen-khi', name: 'Máy nén khí', meta: '8 – 15 bar · di động & cố định · 15+ máy', image: '/images/categories/may-nen-khi.jpg' },
  { slug: 'may-phun-rua-ap-luc-cao', name: 'Phun rửa áp lực cao (UHP)', meta: 'Hệ thống UHP & hydrotest · nhiều cấp áp suất', image: '/images/categories/phun-rua-uhp.jpg' },
  { slug: 'may-han', name: 'Máy hàn', meta: 'MIG · TIG · máy hàn kéo theo máy phát', image: '/images/categories/may-han.jpg' },
];

export const categoryHref = (slug: string) => `/cho-thue-${slug}/`;
```

Create `src/components/CategoryCard.tsx`:
```tsx
import Link from 'next/link';
import type { Category } from '@/config/categories';
import { categoryHref } from '@/config/categories';

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={categoryHref(category.slug)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-[170px] overflow-hidden bg-navy-dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={category.image}
          alt={`Cho thuê ${category.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-dark/85 to-transparent px-4 pb-2.5 pt-5 text-[15px] font-bold text-white">
          {category.name}
        </span>
      </div>
      <div className="p-5">
        <p className="min-h-[38px] text-[13.5px] text-muted">{category.meta}</p>
        <span className="mt-2 inline-flex items-center gap-1.5 font-bold text-accent">
          Xem thiết bị →
        </span>
      </div>
    </Link>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/components/CategoryCard.test.tsx`
Expected: PASS (1 test).

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add category data and CategoryCard component"
```

---

### Task 11: Homepage (hero + stats + category grid)

**Files:**
- Modify: `src/app/page.tsx`
- Create: `src/components/Hero.tsx`, `src/components/Stats.tsx`, `src/app/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `src/app/page.test.tsx`:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Homepage', () => {
  it('renders exactly one H1 with the rental value proposition', () => {
    render(<Home />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toMatch(/cho thuê/i);
  });

  it('renders all four category cards', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /máy phát điện/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /máy nén khí/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /phun rửa áp lực cao/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /máy hàn/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/app/page.test.tsx`
Expected: FAIL (current default page has no matching H1 / category links).

- [ ] **Step 3: Write Hero and Stats components**

Create `src/components/Hero.tsx`:
```tsx
import { Button } from './ui/Button';
import { site, telHref } from '@/config/site';

export function Hero() {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-5 py-20">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
          Cho thuê thiết bị công nghiệp
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
          Cho thuê máy phát điện, máy nén khí &amp; thiết bị công trình
        </h1>
        <p className="mt-4 max-w-xl text-[#c3d3e2]">
          Đầy đủ công suất, thương hiệu lớn, sẵn kho. Khảo sát, giao lắp tận công trình
          khắp miền Nam.
        </p>
        <div className="mt-7 flex gap-3">
          <Button href="/lien-he/">Nhận báo giá</Button>
          <Button href={telHref(site.hotline)} variant="outline" className="!text-white !border-white/40">
            Gọi ngay 0936 899 431
          </Button>
        </div>
      </div>
    </section>
  );
}
```

Create `src/components/Stats.tsx`:
```tsx
const stats = [
  { value: '18+', label: 'Năm kinh nghiệm' },
  { value: '70+', label: 'Thiết bị sẵn kho' },
  { value: '10+', label: 'Tỉnh thành phục vụ' },
  { value: '24/7', label: 'Hỗ trợ khẩn cấp' },
];

export function Stats() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-extrabold text-navy">{s.value}</div>
            <div className="mt-1 text-sm text-muted">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Write the homepage**

Replace `src/app/page.tsx` with:
```tsx
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/config/categories';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section className="mx-auto max-w-[1180px] px-5 py-14">
        <p className="text-[13px] font-bold uppercase tracking-[0.18em] text-accent">
          Thiết bị cho thuê
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-navy">Chọn nhóm thiết bị bạn cần</h2>
        <p className="mt-2 max-w-2xl text-muted">
          4 nhóm thiết bị công nghiệp — đầy đủ công suất, thương hiệu lớn, sẵn kho, giao lắp
          tận công trình.
        </p>
        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} />
          ))}
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/app/page.test.tsx`
Expected: PASS (2 tests).

- [ ] **Step 6: Run full test suite + build**

Run: `npm test && npm run build`
Expected: all tests pass; build succeeds; `out/index.html` exists.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: build homepage with hero, stats, and category grid"
```

---

### Task 12: Cloudflare Pages deploy

**Files:**
- Create: `wrangler.toml`, `README.md` (deploy section)

- [ ] **Step 1: Install wrangler**

```bash
npm install -D wrangler
```

- [ ] **Step 2: Add wrangler config**

Create `wrangler.toml`:
```toml
name = "pmc-website"
compatibility_date = "2026-08-10"
pages_build_output_dir = "out"
```

- [ ] **Step 3: Add deploy scripts to package.json**

Add to `"scripts"`:
```json
"deploy": "next build && wrangler pages deploy out --project-name=pmc-website"
```

- [ ] **Step 4: Authenticate and deploy the preview**

Tell the user to run this themselves (interactive login) via the `!` prefix in the session:
```
! npx wrangler login
```
Then:
```bash
npm run deploy
```
Expected: wrangler prints a `https://<hash>.pmc-website.pages.dev` preview URL. Open it and confirm the homepage renders with header, hero, 4 category cards, footer, and floating buttons.

- [ ] **Step 5: Document and commit**

Create `README.md` with a "Deploy" section describing `npm run deploy` and the preview URL flow, then:
```bash
git add -A
git commit -m "chore: add Cloudflare Pages deploy config"
```

---

## Self-Review

**Spec coverage (Phase 1 scope):**
- Static Next.js + Cloudflare Pages → Tasks 1, 12 ✅
- Design tokens (navy/teal/accent, Be Vietnam Pro) → Task 3 ✅
- Header with nav + search → Task 7 ✅
- Footer with NAP (2 locations) → Task 8 ✅
- Floating Hotline + Zalo with clean tel: (NAP fix from audit) → Tasks 4, 6 ✅
- Homepage hero + stats + 2-tier entry (category cards) using approved mockup + real images → Tasks 10, 11 ✅
- Mobile-first (responsive grids, md: breakpoints) → Tasks 7, 8, 11 ✅
- Deferred to later phases (documented): CMS/Sanity (Phase 2); category/detail/location/project/blog/contact pages, search, filters (Phase 3); metadata per page, schema, sitemap, robots, IndexNow, 301 redirects (Phase 4).

**Placeholder scan:** No TBD/TODO; every code step contains full code. ✅

**Type consistency:** `Category` fields (`slug`, `name`, `meta`, `image`) match between `categories.ts`, `CategoryCard.tsx`, and its test; `categoryHref(slug)` used consistently; `telHref` signature identical across `site.ts`, `FloatingContact`, `Header`, `Footer`, `Hero`. ✅

**Note on TDD granularity:** Logic units (`site.ts` config + `telHref`, `Button`, cards, homepage structure) are TDD'd. Pure layout wrapping (Task 9) is verified by build + downstream render tests rather than a dedicated unit test — intentional, to avoid brittle snapshot tests of pure markup.
