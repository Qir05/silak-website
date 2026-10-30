/**
 * JSON-LD structured data. Only facts that are visible on the site are used:
 * the business name, city and country (shown in the footer), the logo, the
 * public social profiles, the active instructor, the page hierarchy, course
 * names and prices, and FAQ answers shown word for word on each page.
 *
 * Deliberately absent, because the site does not state them: street address,
 * phone, opening hours, ratings, review aggregates, and instructor
 * credentials. That is also why this is not LocalBusiness.
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
      // The domain and Instagram handle use these spellings of the same business.
      alternateName: ["SiLak Adventure", "SiLak Adventures"],
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logos/silak-logo.png` },
      image: `${SITE_URL}${SOCIAL_IMAGE.url}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Davao City",
        addressCountry: "PH",
      },
      areaServed: {
        "@type": "City",
        name: "Davao City",
        containedInPlace: { "@type": "Place", name: "Mindanao, Philippines" },
      },
      knowsAbout: ["Swimming", "Freediving", "Water safety"],
      member: { "@id": INSTRUCTOR_ID },
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
    knowsAbout: ["Swimming", "Freediving"],
    worksFor: { "@id": ORG_ID },
  };
}

/** The page itself, tied to the site and organization, with its breadcrumb. */
export function pageSchema(name: string, path: string) {
  const url = `${SITE_URL}${path}`;
  const breadcrumbId = `${url}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": ORG_ID },
        breadcrumb: { "@id": breadcrumbId },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name, item: url },
        ],
      },
    ],
  };
}

type CourseInput = {
  name: string;
  description: string;
  /** Price in Philippine pesos, only when it is published on the site. */
  pricePhp?: number;
  ages?: [number, number];
};

export function coursesSchema(courses: CourseInput[]) {
  return {
    "@context": "https://schema.org",
    "@graph": courses.map((course) => ({
      "@type": "Course",
      name: course.name,
      description: course.description,
      provider: { "@id": ORG_ID },
      inLanguage: "en",
      ...(course.pricePhp
        ? {
            offers: {
              "@type": "Offer",
              category: "Paid",
              price: course.pricePhp,
              priceCurrency: "PHP",
            },
          }
        : {}),
      ...(course.ages
        ? {
            audience: {
              "@type": "PeopleAudience",
              suggestedMinAge: course.ages[0],
              suggestedMaxAge: course.ages[1],
            },
          }
        : {}),
    })),
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
