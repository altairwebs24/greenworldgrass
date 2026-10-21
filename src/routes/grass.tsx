import { createFileRoute } from "@tanstack/react-router";
import { media } from "@/lib/site";
import { PageHero, WhatsAppCTA } from "@/components/PageHero";

export const Route = createFileRoute("/grass")({
  head: () => ({
    meta: [
      { title: "Grass & Garden Soils — Greenworld Grass" },
      { name: "description", content: "Kikuyu, Evergreen, LM Berea and Cynodon grass in stock, plus lawn dressing, potting soil, compost and topsoil." },
      { property: "og:title", content: "Grass & Garden Soils — Greenworld Grass" },
      { property: "og:description", content: "Natural grass in stock and quality garden soils in Gauteng." },
      { property: "og:image", content: media.harvest },
      { name: "twitter:image", content: media.harvest },
    ],
  }),
  component: Grass,
});

const grasses = [
  { name: "Kikuyu", note: "Hardy, fast-spreading and loves full sun." },
  { name: "Evergreen", note: "Stays lush and green for longer through the seasons." },
  { name: "LM Berea", note: "Soft, fine-leafed and shade-tolerant." },
  { name: "Cynodon", note: "Dense, durable turf for high-traffic areas." },
];
const soils = ["Lawn Dressing", "Potting Soil", "Rich Mix Compost", "Topsoil Mixture", "Top Soil", "Compost"];

function Grass() {
  return (
    <>
      <PageHero image={media.harvest} eyebrow="In stock now" title="Grass & Soil" />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-5xl">Natural grass</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {grasses.map((g) => (
            <div key={g.name} className="overflow-hidden rounded-2xl border bg-card">
              <div className="grass-stripes h-24" />
              <div className="p-5">
                <h3 className="text-3xl text-primary">{g.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.note}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl bg-secondary p-6">
          <h3 className="text-3xl">Artificial grass / synthetic lawn</h3>
          <p className="mt-1 text-secondary-foreground">Zero-mowing, always-green synthetic lawns — supplied and installed.</p>
        </div>
      </section>
      <section className="bg-soil text-soil-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="font-serif-accent opacity-80">Feed your garden</p>
            <h2 className="mt-2 text-5xl">Garden soils</h2>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {soils.map((s) => (
                <li key={s} className="rounded-xl border border-soil-foreground/20 px-4 py-3 font-medium">{s}</li>
              ))}
            </ul>
          </div>
          <img src={media.truck} alt="Truck loaded with fresh grass" className="aspect-[4/3] w-full rounded-2xl object-cover" />
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}
