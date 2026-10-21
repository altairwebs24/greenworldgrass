import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Truck, Sprout, ShieldCheck } from "lucide-react";
import { media, contact } from "@/lib/site";
import { WhatsAppCTA } from "@/components/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Greenworld Grass — Instant Lawn Installation in Gauteng" },
      { name: "description", content: "Fresh instant grass direct from our farm, artificial lawns, soils and landscaping across Gauteng at affordable prices." },
      { property: "og:title", content: "Greenworld Grass — Instant Lawns, Gauteng" },
      { property: "og:description", content: "Fresh farm grass, supply & installation all around Gauteng." },
      { property: "og:image", content: media.sodRolls },
      { name: "twitter:image", content: media.sodRolls },
    ],
  }),
  component: Index,
});

const perks = [
  { icon: Sprout, title: "Farm fresh", text: "Cut and delivered straight from our own fields." },
  { icon: Truck, title: "Delivered", text: "All around Gauteng, on time." },
  { icon: Leaf, title: "Eco-friendly", text: "Healthy, green and pristine lawns." },
  { icon: ShieldCheck, title: "Reliable", text: "Licensed, affordable, residential & commercial." },
];

function Index() {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <img src={media.sodRolls} alt="Rolls of fresh instant lawn on the farm" className="absolute inset-0 h-full w-full object-cover" />
        <div className="bg-hero-overlay absolute inset-0" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-16 text-forest-foreground">
          <p className="font-serif-accent text-xl text-lime">For all your instant lawn installation</p>
          <h1 className="mt-2 text-7xl md:text-[9rem]">Green Lawns,<br />Grown Right.</h1>
          <p className="mt-4 max-w-lg text-lg opacity-90">Good quality fresh grass direct from our farm, supplied and installed all around Gauteng at affordable prices.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow-lush">Get a free quote</a>
            <Link to="/grass" className="rounded-full border border-forest-foreground/50 px-7 py-3 font-semibold">See our grass</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {perks.map((p) => (
          <div key={p.title} className="rounded-2xl border bg-card p-6">
            <p.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-3xl">{p.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 md:grid-cols-2">
        <img src={media.farmTractor} alt="Lush grass field with tractor" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lush" />
        <div>
          <p className="font-serif-accent text-primary">From our farm to your yard</p>
          <h2 className="mt-2 text-5xl md:text-6xl">Instant grass & artificial lawns</h2>
          <p className="mt-4 text-muted-foreground">We supply and install different types of grass — Kikuyu, Evergreen, LM Berea and Cynodon — plus garden soils, compost and full landscaping. Ground preparation, laying and rolling handled by our team.</p>
          <Link to="/services" className="mt-6 inline-block font-semibold text-primary underline underline-offset-4">Explore services →</Link>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}
