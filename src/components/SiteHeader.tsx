import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { contact, media } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/grass", label: "Grass & Soil" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={media.logo} alt="Green Lawns logo" className="h-11 w-11 rounded-full border object-cover" />
          <span className="font-display text-2xl text-primary">Greenworld Grass</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm font-medium text-muted-foreground hover:text-primary" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <a href={`tel:${contact.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
            <Phone className="h-4 w-4" /> {contact.phoneDisplay}
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-4 py-3 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-md px-2 py-2 font-medium" activeProps={{ className: "bg-secondary text-primary" }} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-4xl">Green Lawns</p>
          <p className="font-serif-accent mt-2 opacity-80">Your lawn, our passion.</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-display text-xl">Contact</p>
          <p className="mt-2">WhatsApp or call {contact.contactName}: {contact.phoneDisplay}</p>
          <p>{contact.email}</p>
          <p>{contact.area}</p>
        </div>
        <div className="text-sm opacity-90">
          <p className="font-display text-xl">Promise</p>
          <p className="mt-2">Free quotes · Friendly service · Eco-friendly care</p>
          <p>Residential & commercial</p>
        </div>
      </div>
      <p className="border-t border-forest-foreground/15 py-4 text-center text-xs opacity-60">© {new Date().getFullYear()} Greenworld Lawn Services</p>
    </footer>
  );
}
