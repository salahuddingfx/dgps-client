import { useLocation } from "react-router-dom";
import { SCHOOL_INFO } from "../../constants/navigation";

const SITE_URL = "https://dhps.edu.bd";

export function SchoolJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL_INFO.name,
    alternateName: SCHOOL_INFO.shortName,
    description: "Quality primary education since 1965 in Cox's Bazar, Bangladesh.",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og-image.jpg`,
    telephone: SCHOOL_INFO.contact.phone,
    email: SCHOOL_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SCHOOL_INFO.address.line1}, ${SCHOOL_INFO.address.district}`,
      addressLocality: SCHOOL_INFO.address.district,
      addressRegion: SCHOOL_INFO.address.division,
      addressCountry: SCHOOL_INFO.address.country,
      postalCode: SCHOOL_INFO.address.postal,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.5646",
      longitude: "89.5292",
    },
    foundingDate: SCHOOL_INFO.established,
    numberOfEmployees: 18,
    telephone: SCHOOL_INFO.contact.phone,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    sameAs: [SCHOOL_INFO.social.facebook, SCHOOL_INFO.social.youtube].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SCHOOL_INFO.name,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }) {
  if (!items || items.length === 0) return null;

  const listItems = items
    .filter((item) => item.path)
    .map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.path}`,
    }));

  if (listItems.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ContactPointJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: SCHOOL_INFO.name,
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SCHOOL_INFO.contact.phone,
      contactType: "customer service",
      email: SCHOOL_INFO.contact.email,
      availableLanguage: ["English", "Bengali"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SCHOOL_INFO.address.line1}, ${SCHOOL_INFO.address.district}`,
      addressLocality: SCHOOL_INFO.address.district,
      addressRegion: SCHOOL_INFO.address.division,
      addressCountry: SCHOOL_INFO.address.country,
      postalCode: SCHOOL_INFO.address.postal,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
