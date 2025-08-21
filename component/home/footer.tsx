import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // bg hitam full width
    <footer className="mt-16 bg-secondary text-secondary-foreground">
      {/* konten tetap center max-w-7xl */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* (opsional) dekorasi halus */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10
                     [background:radial-gradient(600px_circle_at_10%_0%,#ffffff22,transparent_45%),
                                  radial-gradient(600px_circle_at_90%_0%,#ffffff22,transparent_45%)]"
          aria-hidden
        />

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand & mission */}
            <div>
              <h3 className="text-lg font-semibold">Sainstext</h3>
              <p className="mt-3 text-sm text-white/70">
                Our mission is to make quality education accessible to everyone.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Social href="#" icon={<InstagramIcon />} label="Instagram" />
                <Social href="#" icon={<LinkedInIcon />} label="LinkedIn" />
                <Social href="#" icon={<XIcon />} label="Twitter" />
              </div>
            </div>

            {/* Help */}
            <FooterCol title="Help">
              <FooterLink href="#">Contact Us</FooterLink>
              <FooterLink href="#">Support Center</FooterLink>
              <FooterLink href="#">FAQ</FooterLink>
            </FooterCol>

            {/* Sainstext */}
            <FooterCol title="Sainstext">
              <FooterLink href="#">Press</FooterLink>
              <FooterLink href="#">Newsletter</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </FooterCol>

            {/* Policies */}
            <FooterCol title="Policies">
              <FooterLink href="#">Accessibility Statement</FooterLink>
              <FooterLink href="#">Terms of Use</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Privacy Notice</FooterLink>
            </FooterCol>
          </div>

          {/* divider */}
          <div className="mt-8 h-px w-full bg-white/10" />

          {/* bottom bar */}
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/60">
              © {year} Sainstext. All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <span className="text-sm text-white/60">Licensed by:</span>
              <Badge href="#">PSE Kominfo</Badge>
              <Badge href="#">Nobelium</Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- sub components ---------- */
function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-base font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="text-white/80 hover:text-white transition">
        {children}
      </Link>
    </li>
  );
}

function Social({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm
                 text-white/90 hover:bg-white/10 hover:border-white/20 transition"
    >
      <span className="text-white/90">{icon}</span>
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
}

function Badge({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-xs
                 text-white/85 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

/* ---------- icons ---------- */
function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm6-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-6 3a3 3 0 1 1-3 3 3 3 0 0 1 3-3Z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3 8h2.9v13H3ZM10 8h2.8v1.8h.1a3 3 0 0 1 2.7-1.5c2.9 0 3.4 1.9 3.4 4.3V21H16V13.9c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V21H10Z" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      aria-hidden
    >
      <path d="m3 3 7.5 9.1L3.8 21H7l5.1-6.1L16.9 21H21l-8-9.8L20.2 3H17L12.3 8.6 8.2 3H3Z" />
    </svg>
  );
}
