import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { media, contact } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Greenworld Grass — Quotes & Orders" },
      { name: "description", content: "WhatsApp or call Sam on 060 320 2515 for quotes, bookings and orders across Gauteng." },
      { property: "og:title", content: "Contact Greenworld Grass" },
      { property: "og:description", content: "Quotes, bookings and orders — WhatsApp or call 060 320 2515." },
      { property: "og:image", content: media.truck },
      { name: "twitter:image", content: media.truck },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: contact.phoneDisplay, href: contact.whatsapp },
    { icon: Phone, label: `Call ${contact.contactName}`, value: contact.phoneDisplay, href: `tel:${contact.phoneIntl}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Service area", value: contact.area },
  ];
  return (
    <>
      <PageHero image={media.truck} eyebrow="Quotes · Bookings · Orders" title="Contact Us" />
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-5xl">Let's green your space</h2>
          <p className="font-serif-accent mt-3 text-lg text-muted-foreground">Free quotes — tell us your area size and the grass you'd like.</p>
          <div className="mt-8 space-y-4">
            {items.map((i) => {
              const inner = (
                <>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-primary"><i.icon className="h-5 w-5" /></span>
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-muted-foreground">{i.label}</span>
                    <span className="block break-all font-semibold">{i.value}</span>
                  </span>
                </>
              );
              return i.href ? (
                <a key={i.label} href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-4 rounded-2xl border bg-card p-4 hover:border-primary">{inner}</a>
              ) : (
                <div key={i.label} className="flex items-center gap-4 rounded-2xl border bg-card p-4">{inner}</div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-card p-8 shadow-lush">
          <img src={media.logo} alt="Green Lawns — Greenworld Lawn Services" className="w-full max-w-sm" />
          <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="mt-6 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground">Message us on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
