/**
 * JSON-LD structured data. Only facts that are visible on the site are used:
 * the business name, positioning, city and country (shown in the footer),
 * the logo, the public social profiles, the active instructor, the page
 * hierarchy, and FAQ answers that appear word for word on /about. No address
 * street, phone, hours, prices, ratings or credentials are claimed.
 */
import { ACTIVE_INSTRUCTOR } from "./instructors";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE, SOCIAL_LINKS } from "./site";

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const INSTRUCTOR_ID = `${SITE_URL}/instructor#person`;

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": ORG_ID,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/silak-logo.png` },
      image: `${SITE_URL}${SOCIAL_IMAGE.url}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davao City",
        addressCountry: "PH",
      },
      areaServed: { "@type": "City", name: "Davao City" },
      knowsAbout: ["Swimming", "Freediving", "Water safety"],
      sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: "en",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export function instructorSchema() {
  const instructor = ACTIVE_INSTRUCTOR;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": INSTRUCTOR_ID,
    name: instructor.name,
    ...(instructor.title ? { jobTitle: instructor.title } : {}),
    image: `${SITE_URL}${instructor.image.src}`,
    url: `${SITE_URL}/instructor`,
    worksFor: { "@id": ORG_ID },
  };
}

/** Home > page breadcrumb for a top-level page. */
export function breadcrumbSchema(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

export type FaqItem = { question: string; answer: string };

export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
