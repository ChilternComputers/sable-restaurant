import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Divider } from "@/components/ui/Divider";
import { teamMembers } from "@/data/team";
import { pressItems } from "@/data/press";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story behind Sable — Head Chef Marcus Webb's vision for modern European fine dining, rooted in seasonality and provenance.",
  alternates: { canonical: "https://sable-restaurant.pages.dev/about/" },
  openGraph: {
    type: "website",
    title: "About | Sable",
    description: "Discover the story behind Sable — Head Chef Marcus Webb's vision for modern European fine dining.",
    url: "https://sable-restaurant.pages.dev/about/",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: "Sable Restaurant" }],
  },
};

export default function AboutPage() {
  const chef = teamMembers[0];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "80px" }}>
      {/* Chef Hero */}
      <section style={{ padding: "0 24px 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: "64px" }}
          >
            <AnimateOnScroll direction="left">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll direction="right" delay={0.2}>
              <p
                className="font-accent uppercase text-brand-champagne"
                style={{
                  fontSize: "14px",
                  letterSpacing: "0.2em",
                  marginBottom: "12px",
                }}
              >
                {chef.role}
              </p>
              <h1
                className="font-heading text-brand-cream"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                }}
              >
                Our Story
              </h1>
              <p
                className="font-heading text-brand-champagne"
                style={{
                  fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                  lineHeight: 1.2,
                  marginBottom: "24px",
                }}
              >
                {chef.name}
              </p>
              <div
                style={{
                  marginBottom: "24px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Divider />
              </div>
              <p
                className="font-body text-brand-muted"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.8,
                }}
              >
                {chef.bio}
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="bg-brand-dark"
        style={{ padding: "120px 24px" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <AnimateOnScroll>
            <SectionHeading subtitle="Philosophy" title="What We Believe" as="h2" />
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div
              className="font-body text-brand-muted"
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <p>
                At Sable, we believe that the best cooking begins long before
                anything reaches the kitchen. It starts in the fields of Kent,
                the waters off Cornwall, the Highland estates — with producers
                who share our obsession with quality.
              </p>
              <p>
                Our menu changes with the seasons, sometimes weekly. We never
                force an ingredient out of its moment. When something is at its
                peak, we celebrate it — simply, confidently, with technique
                that enhances rather than obscures.
              </p>
              <blockquote
                className="font-accent italic text-brand-cream"
                style={{
                  fontSize: "1.35rem",
                  lineHeight: 1.7,
                  borderLeft: "2px solid #C9A96E",
                  paddingLeft: "24px",
                }}
              >
                &ldquo;A great dish should feel inevitable — as though
                those ingredients were always meant to be together.&rdquo;
              </blockquote>
              <p>
                We source exclusively from small-scale British producers —
                farms we visit, fishermen we know by name, foragers who
                understand the land. Sustainability isn&apos;t a badge for us;
                it&apos;s simply the right way to cook.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "120px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <AnimateOnScroll>
            <SectionHeading subtitle="The People" title="Our Team" as="h2" />
          </AnimateOnScroll>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "48px" }}
          >
            {teamMembers.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 0.15}>
                <div style={{ textAlign: "center" }}>
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "3/4",
                      marginBottom: "24px",
                    }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <h3
                    className="font-heading text-brand-cream"
                    style={{ fontSize: "1.25rem", marginBottom: "4px" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="font-accent text-brand-champagne"
                    style={{
                      fontSize: "14px",
                      marginBottom: "12px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "14px", lineHeight: 1.7 }}
                  >
                    {member.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section
        className="bg-brand-dark"
        style={{ padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <AnimateOnScroll>
            <SectionHeading subtitle="Recognition" title="Press & Awards" as="h2" />
          </AnimateOnScroll>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            style={{ gap: "32px" }}
          >
            {pressItems.map((item, i) => (
              <AnimateOnScroll key={item.publication} delay={i * 0.1}>
                <div
                  className="bg-brand-surface border border-brand-muted/10"
                  style={{ padding: "32px", textAlign: "center" }}
                >
                  <p
                    className="font-heading text-brand-cream"
                    style={{
                      fontSize: "1rem",
                      letterSpacing: "0.1em",
                      marginBottom: "8px",
                    }}
                  >
                    {item.publication}
                  </p>
                  <p
                    className="font-accent italic text-brand-champagne"
                    style={{ fontSize: "14px", marginBottom: "8px" }}
                  >
                    {item.quote}
                  </p>
                  <p
                    className="font-body text-brand-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {item.year}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
