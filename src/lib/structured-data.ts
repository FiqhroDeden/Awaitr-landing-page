const BASE_URL = "https://awaitr.vercel.app";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Awaitr",
    url: BASE_URL,
    logo: `${BASE_URL}/images/app-icon.png`,
    email: "dedhensupatmo@gmail.com",
    sameAs: [
      "https://x.com/fiqhrodedhen",
      "https://threads.net/@fiqhrodedhen",
      "https://www.producthunt.com/products/awaitr",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Awaitr",
    url: BASE_URL,
    description:
      "Personal waitlist manager for iOS 26. Track jobs, scholarships, pre-orders & more. Free, offline, no account needed.",
    publisher: {
      "@type": "Organization",
      name: "Awaitr",
    },
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function generateArticleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: input.url,
    datePublished: input.datePublished ?? "2026-03-27",
    dateModified: input.dateModified ?? "2026-03-27",
    author: {
      "@type": "Person",
      name: "Fiqhro Dedhen Supatmo",
    },
    publisher: {
      "@type": "Organization",
      name: "Awaitr",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/app-icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
