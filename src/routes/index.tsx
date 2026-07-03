import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sab/hero";
import { WhyUs } from "@/components/sab/why-us";
import { Services } from "@/components/sab/services";
import { Gallery } from "@/components/sab/gallery";
import { Reviews } from "@/components/sab/reviews";
import { Contact } from "@/components/sab/contact";
import { FinalCTA } from "@/components/sab/final-cta";
import { BRAND } from "@/components/sab/data";

const TITLE =
  "Sab' Esthétique — Institut de beauté à Lomé | Manucure, soins, microblading";
const DESCRIPTION =
  "Institut de beauté à Hedzranawoé, Lomé. Manucure, pédicure, onglerie, microblading, extensions de cils, soins visage et corps. 4,2★ sur Google. Réservez au 91 49 46 50.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: BRAND.name,
          image: [],
          telephone: "+228 91 49 46 50",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Hedzranawoé, boulevard du Haho",
            addressLocality: "Lomé",
            addressCountry: "TG",
          },
          geo: { "@type": "GeoCoordinates", latitude: 6.1758144, longitude: 1.2409175 },
          url: BRAND.mapsUrl,
          sameAs: [BRAND.instagram, BRAND.tiktok, BRAND.facebook],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "19:00",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: BRAND.rating,
            reviewCount: BRAND.reviewCount,
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyUs />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <FinalCTA />
    </>
  );
}
