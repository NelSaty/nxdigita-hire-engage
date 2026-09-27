import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";

const COLUMNS = [
  {
    heading: "Product",
    links: [
      { label: "Live Projects", href: "#live-projects" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Certificate", href: "#certificate" },
      { label: "Pricing", href: "#get-started" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Why Us", href: "#why-us" },
      { label: "Partners", href: "#partners" },
      { label: "Sign Up", href: "/signup" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "Hire Interns", href: "#partners" },
      { label: "Partner Network", href: "#partners" },
      { label: "Become a Partner", href: "/signup" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
    ],
  },
];

const SOCIALS = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com" },
  { label: "X", icon: Twitter, href: "https://x.com" },
  { label: "GitHub", icon: Github, href: "https://github.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <p className="text-sm font-semibold tracking-tight text-foreground">
              NxDigita AI Technologies
            </p>
            <p className="mt-1.5 text-[10px] font-medium tracking-[0.28em] text-muted-foreground">
              HIRE · ENGAGE · DEPLOY
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <social.icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground">
                {column.heading.toUpperCase()}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} NxDigita AI Technologies. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
