import { createFileRoute } from "@tanstack/react-router";
import { media } from "@/lib/site";
import { PageHero, WhatsAppCTA } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Lawn & Landscaping Services — Greenworld Grass" },
      { name: "description", content: "Artificial lawns, block & turf, garden design, irrigation, landscaping, grass laying, ground preparation, rolling and mowing." },
      { property: "og:title", content: "Lawn & Landscaping Services — Greenworld Grass" },
      { property: "og:description", content: "Full lawn installation and garden services across Gauteng." },
      { property: "og:image", content: media.mowing },
      { name: "twitter:image", content: media.mowing },
    ],
  }),
  component: Services,
});

const services = [
  ["Laying new grass", "Fresh instant lawn rolled out and settled in a day."],
  ["Ground preparation", "Levelling, clearing and soil prep for strong roots."],
  ["Rolling", "A smooth, even finish that helps new grass take."],
  ["Artificial grass", "Synthetic lawn supply and installation."],
  ["Block & turf", "Paving blocks combined with neat turf strips."],
  ["Garden designing", "Planting plans and outdoor transformations."],
  ["Irrigation systems", "Watering systems that keep lawns thriving."],
  ["Landscaping", "Design, planting and complete makeovers."],
  ["Lawn mowing", "Trimming and cutting for a perfect finish."],
  ["Garden maintenance", "Weeding, pruning and seasonal care."],
];

function Services() {
  return (
    <>
      <PageHero image={media.mowing} eyebrow="What we do" title="Services" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-px overflow-hidden rounded-2xl border bg-border sm:grid-cols-2">
          {services.map(([t, d], i) => (
            <div key={t} className="flex gap-4 bg-card p-6">
              <span className="font-display text-4xl text-accent-foreground/30">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-3xl text-primary">{t}</h3>
                <p className="text-sm text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 md:grid-cols-2">
        <img src={media.flyer} alt="GreenWorld Lawn Services flyer" className="w-full rounded-2xl shadow-lush" />
        <div>
          <p className="font-serif-accent text-primary">Licensed · Reliable · Affordable</p>
          <h2 className="mt-2 text-5xl">Residential & commercial</h2>
          <p className="mt-4 text-muted-foreground">Homes, estates, schools or offices — we bring the same care to every lawn. Free quotes, friendly service and eco-friendly care.</p>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}
