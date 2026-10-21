import { createFileRoute } from "@tanstack/react-router";
import { media } from "@/lib/site";
import { PageHero, WhatsAppCTA } from "@/components/PageHero";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Greenworld Grass Farm & Deliveries" },
      { name: "description", content: "Photos from our grass farm, harvesting, mowing and lawn deliveries around Gauteng." },
      { property: "og:title", content: "Gallery — Greenworld Grass" },
      { property: "og:description", content: "See our farm fields, harvests and deliveries." },
      { property: "og:image", content: media.farmTractor },
      { name: "twitter:image", content: media.farmTractor },
    ],
  }),
  component: Gallery,
});

const photos = [
  { src: media.sodRolls, alt: "Freshly cut grass rolls", cap: "Fresh-cut rolls", span: "md:row-span-2" },
  { src: media.farmTractor, alt: "Striped grass field", cap: "Our fields", span: "" },
  { src: media.truck, alt: "Delivery truck with grass", cap: "On the way to you", span: "" },
  { src: media.harvest, alt: "Harvesting team in field", cap: "Harvest day", span: "md:row-span-2" },
  { src: media.mowing, alt: "Tractor mowing the farm", cap: "Farm care", span: "" },
  { src: media.flyer, alt: "Services flyer", cap: "Our services", span: "" },
];

function Gallery() {
  return (
    <>
      <PageHero image={media.farmTractor} eyebrow="From the farm" title="Gallery" />
      <section className="mx-auto grid max-w-6xl auto-rows-[220px] gap-4 px-4 py-16 sm:grid-cols-2 md:grid-cols-3">
        {photos.map((p) => (
          <figure key={p.cap} className={`group relative overflow-hidden rounded-2xl ${p.span}`}>
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="bg-hero-overlay absolute inset-x-0 bottom-0 p-4 font-serif-accent text-forest-foreground">{p.cap}</figcaption>
          </figure>
        ))}
      </section>
      <WhatsAppCTA />
    </>
  );
}
