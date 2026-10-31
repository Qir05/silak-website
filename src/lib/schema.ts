/**
 * JSON-LD structured data. Only facts that are visible on the site are used:
 * the business name, city and country (shown in the footer), the logo, the
 * public social profiles, the active instructors, the page hierarchy, course
 * names and prices, and FAQ answers shown word for word on each page.
 *
 * Deliberately absent, because the site does not state them: street address,
 * phone, opening hours, coordinates, ratings, review aggregates, and course
 * schedules. That is also why this is not LocalBusiness. Courses name SiLak as
 * provider and no instructor, because who teaches which course is unconfirmed.
 */
import { ACTIVE_INSTRUCTORS, type InstructorProfile } from "./instructors";
import {
  ALTERNATE_NAMES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_IMAGE,
  SOCIAL_LINKS,
} from "./site";

type EntityRef = { "@id": string };

const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationRef: EntityRef = { "@id": `${SITE_URL}/#organization` };

/** Stable ids that also resolve to each instructor's section on /instructor. */
const instructorRef = (instructor: InstructorProfile): EntityRef => ({
  "@id": `${SITE_URL}/instructor#${instructor.slug}`,
});

export const instructorRefs = ACTIVE_INSTRUCTORS.map(instructorRef);

export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      ...organizationRef,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAMES,
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
        containedInPlace: {
          "@type": "Place",
          name: "Mindanao",
          containedInPlace: { "@type": "Country", name: "Philippines" },
        },
      },
      knowsAbout: ["Swimming", "Freediving", "Water safety"],
      member: instructorRefs,
      sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      name: SITE_NAME,
      alternateName: ALTERNATE_NAMES,
      url: SITE_URL,
      inLanguage: "en",
      publisher: organizationRef,
    },
  ],
};

/** One Person per active instructor, carrying only what the profile states. */
export function instructorsSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": ACTIVE_INSTRUCTORS.map((instructor) => ({
      "@type": "Person",
      ...instructorRef(instructor),
      name: instructor.name,
      ...(instructor.alternateName ? { alternateName: instructor.alternateName } : {}),
      ...(instructor.title
        ? {
            jobTitle: instructor.title,
            hasCredential: {
              "@type": "EducationalOccupationalCredential",
              name: instructor.title,
            },
          }
        : {}),
      image: `${SITE_URL}${instructor.image.src}`,
      url: `${SITE_URL}/instructor`,
      knowsAbout: instructor.knowsAbout,
      worksFor: organizationRef,
    })),
  };
}

const pageUrl = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

/** The page itself, tied to the site and organization, with its breadcrumb. */
export function pageSchema(
  name: string,
  path: string,
  { mainEntity }: { mainEntity?: EntityRef | EntityRef[] } = {},
) {
  const url = pageUrl(path);
  const isHome = path === "/";
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
        about: organizationRef,
        ...(mainEntity ? { mainEntity } : {}),
        ...(isHome ? {} : { breadcrumb: { "@id": breadcrumbId } }),
      },
      ...(isHome
        ? []
        : [
            {
              "@type": "BreadcrumbList",
              "@id": breadcrumbId,
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
                { "@type": "ListItem", position: 2, name, item: url },
              ],
            },
          ]),
    ],
  };
}

export type CourseInput = {
  /** Stable key for the course @id. Never change it. */
  slug: string;
  name: string;
  description: string;
  /** Price in Philippine pesos, only when it is published on the site. */
  pricePhp?: number;
  ages?: [number, number];
};

export const courseRef = (path: string, course: CourseInput): EntityRef => ({
  "@id": `${pageUrl(path)}#${course.slug}`,
});

export function coursesSchema(path: string, courses: CourseInput[]) {
  return {
    "@context": "https://schema.org",
    "@graph": courses.map((course) => ({
      "@type": "Course",
      ...courseRef(path, course),
      name: course.name,
      description: course.description,
      url: pageUrl(path),
      provider: organizationRef,
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

export function faqSchema(path: string, items: FaqItem[]) {
  const url = pageUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    isPartOf: { "@id": `${url}#webpage` },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
