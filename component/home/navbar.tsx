"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full border-b border-black/5 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-black dark:bg-white" />
          <Link
            href="/"
            className="font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            Sainstext
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <li>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white"
              href="#"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white"
              href="#"
            >
              Subject
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white"
              href="#"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white"
              href="#"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-neutral-900 dark:hover:text-white"
              href="#"
            >
              Donate
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#"
            className="px-3 h-9 inline-flex items-center rounded-xl border border-neutral-300/70 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm"
          >
            Login
          </Link>
          <Link
            href="#"
            className="px-3 h-9 inline-flex items-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 text-sm font-medium"
          >
            Sign up free
          </Link>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg border border-neutral-300 dark:border-neutral-700"
          aria-label="Toggle menu"
        >
          <div className="i-[=] h-4 w-4" />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-black/5 dark:border-white/10">
          <ul className="px-4 py-3 space-y-2 text-sm">
            {["Join us", "Katalog", "What We Do", "News", "Donate"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="block rounded-lg px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
            <div className="flex gap-2 px-3 pt-2">
              <Link
                href="#"
                className="flex-1 px-3 h-9 inline-flex items-center justify-center rounded-xl border border-neutral-300/70 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm"
              >
                Login
              </Link>
              <Link
                href="#"
                className="flex-1 px-3 h-9 inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 text-sm font-medium"
              >
                Sign up free
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
}
