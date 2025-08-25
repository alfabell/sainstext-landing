"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/component/ui/theme-toggle"; // <-- import di sini

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Subjects", href: "/subjects" },
  {
    label: "What We Do",
    href: "/what-we-do",
    children: [
      { label: "Team", href: "/what-we-do/team" },
      { label: "Research", href: "/what-we-do/research" },
      { label: "K12 Books & Resources", href: "/what-we-do/k12" },
      { label: "College Books Resources", href: "/what-we-do/college" },
      { label: "General", href: "/what-we-do/general" },
      { label: "Modules", href: "/what-we-do/modules" },
      { label: "Institutional Partnerships", href: "/what-we-do/institutional-partnerships" },
      { label: "Technology Partnerships", href: "/what-we-do/technology-partnerships" },
    ],
  },
  {
    label: "Users",
    href: "/users",
    children: [
      { label: "Learner", href: "/users/learner" },
      { label: "Educators", href: "/users/educators" },
      { label: "Institutions", href: "/users/institutions" },
    ],
  },
  { label: "Donate", href: "/donate" },
];

export default function Navbar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openKeys, setOpenKeys] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4">
          {/* brand */}
          <Link href="/" className="inline-flex items-center gap-2 font-semibold h-14">
            <span className="inline-block h-6 w-6 rounded bg-primary" />
            <span className="hidden sm:inline">Sainstext</span>
          </Link>

          {/* desktop menu */}
          <ul className="hidden md:flex items-stretch gap-1">
            {NAV.map((item) =>
              item.children ? (
                <li key={item.label} className="relative group">
                  <button
                    className={[
                      "relative h-14 px-3 text-sm transition inline-flex items-center gap-1",
                      pathname?.startsWith(item.href ?? "")
                        ? "text-white"
                        : "text-white/80 hover:text-white",
                      "after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:origin-center",
                      pathname?.startsWith(item.href ?? "")
                        ? "after:scale-x-100"
                        : "after:scale-x-0 group-hover:after:scale-x-100",
                    ].join(" ")}
                  >
                    {item.label}
                    <ChevronDown className="transition-transform group-hover:rotate-180" />
                  </button>

                  {/* dropdown */}
                  <div className="absolute left-0 top-full mt-1 min-w-[240px] rounded-xl border border-white/10 bg-secondary shadow-lg ring-1 ring-black/5 opacity-0 translate-y-1 pointer-events-none transition group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                    <ul className="py-2">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            className={[
                              "block px-3 py-2 text-sm rounded-md",
                              pathname?.startsWith(c.href)
                                ? "bg-white/15 text-white"
                                : "text-white/80 hover:text-white hover:bg-white/10",
                            ].join(" ")}
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href ?? "#"}
                    className={[
                      "relative inline-flex h-14 items-center px-3 text-sm transition",
                      pathname === item.href ? "text-white" : "text-white/80 hover:text-white",
                      "after:absolute after:inset-x-2 after:-bottom-px after:h-0.5 after:rounded-full after:bg-primary after:transition-transform after:origin-center",
                      pathname === item.href ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme toggle (desktop) */}
            <ThemeToggle className="mr-1" /> {/* <-- Theme toggle */}

            <Link
              href="#"
              className="rounded-md px-3 py-1.5 text-sm border border-white/15 bg-white/10 hover:bg-white/20 transition"
            >
              Login
            </Link>
            <Link
              href="#"
              className="rounded-md px-3.5 py-1.5 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 border border-white/10 transition"
            >
              Sign-up Now →
            </Link>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpenMobile((v) => !v)}
            className="md:hidden rounded p-2 hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={openMobile}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </nav>

        {/* mobile menu */}
        {openMobile && (
          <div className="md:hidden pb-4">
            <ul className="space-y-1 text-sm">
              {NAV.map((item) =>
                item.children ? (
                  <li key={item.label} className="rounded-md">
                    <button
                      onClick={() =>
                        setOpenKeys((s) => ({ ...s, [item.label]: !s[item.label] }))
                      }
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left hover:bg-white/10"
                    >
                      <span
                        className={
                          pathname?.startsWith(item.href ?? "")
                            ? "text-white"
                            : "text-white/80"
                        }
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        className={[
                          "transition-transform",
                          openKeys[item.label] ? "rotate-180" : "",
                        ].join(" ")}
                      />
                    </button>

                    <div
                      className={[
                        "grid overflow-hidden transition-[grid-template-rows] duration-200",
                        openKeys[item.label] ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="min-h-0">
                        <ul className="px-1 pb-2 space-y-1">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={() => setOpenMobile(false)}
                                className={
                                  pathname?.startsWith(c.href)
                                    ? "block rounded px-3 py-2 bg-white/15 text-white"
                                    : "block rounded px-3 py-2 text-white/80 hover:text-white hover:bg-white/10"
                                }
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "#"}
                      onClick={() => setOpenMobile(false)}
                      className={
                        pathname === item.href
                          ? "block rounded px-3 py-2 bg-white/15 text-white"
                          : "block rounded px-3 py-2 text-white/80 hover:text-white hover:bg-white/10"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            {/* Theme toggle (mobile) */}
            <div className="mt-3 flex justify-end">
              <ThemeToggle /> {/* <-- Theme toggle di mobile */}
            </div>

            <div className="mt-3 flex gap-2">
              <Link
                href="#"
                className="flex-1 text-center rounded-md px-3 py-2 text-sm border border-white/15 bg-white/10 hover:bg-white/20"
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 text-center rounded-md px-3 py-2 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90"
              >
                Sign-up Now →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
