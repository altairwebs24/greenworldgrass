export function PageHero({ image, eyebrow, title }: { image: string; eyebrow: string; title: string }) {
  return (
    <section className="relative h-72 overflow-hidden md:h-96">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="bg-hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-10 text-forest-foreground">
        <p className="font-serif-accent text-lg text-lime">{eyebrow}</p>
        <h1 className="text-6xl md:text-8xl">{title}</h1>
      </div>
    </section>
  );
}

export function WhatsAppCTA() {
  return (
    <section className="grass-stripes">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-14 text-center text-primary-foreground">
        <h2 className="text-5xl md:text-6xl">Ready for a greener lawn?</h2>
        <p className="font-serif-accent text-lg">Quotes, bookings & orders — just send a message.</p>
        <a href="https://wa.me/27603202515" target="_blank" rel="noreferrer" className="rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground shadow-lush">
          WhatsApp 060 320 2515
        </a>
      </div>
    </section>
  );
}
