import Script from "next/script";

export default function SEOSchemas() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://thetechwriter.dev#person",
        "name": "The Tech Writer",
        "url": "https://thetechwriter.dev",
        "sameAs": [
          "https://twitter.com/thetechwriter",
          "https://linkedin.com/in/thetechwriter"
        ],
        "jobTitle": "Content Writer & Technical Writer",
        "description": "Professional content writer specializing in AI and SaaS products. I create clear, user-focused content including tutorials, explainers, blog posts, and product documentation.",
        "knowsAbout": [
          "Technical Writing",
          "Content Writing",
          "AI Content",
          "SaaS Documentation",
          "Product Documentation",
          "Blog Writing",
          "Developer Documentation",
          "API Documentation"
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://thetechwriter.dev#business",
        "name": "The Tech Writer",
        "url": "https://thetechwriter.dev",
        "description": "Professional content writing services for AI and SaaS products",
        "serviceType": [
          "Content Writing",
          "Technical Writing",
          "Product Documentation",
          "Blog Writing",
          "Tutorial Writing"
        ],
        "areaServed": "Worldwide",
        "knowsLanguage": "en",
        "priceRange": "$$",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Content Writing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Blog Posts & Articles",
              "description": "Blog posts, tutorials, and long-form articles for AI and SaaS products",
              "priceCurrency": "USD",
              "price": "0.25-0.40",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "0.25-0.40",
                "unitText": "WORD"
              }
            },
            {
              "@type": "Offer",
              "name": "Technical Tutorials",
              "description": "Developer guides and technical tutorials",
              "priceCurrency": "USD",
              "price": "0.35-0.60",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "0.35-0.60",
                "unitText": "WORD"
              }
            },
            {
              "@type": "Offer",
              "name": "Product Explainers",
              "description": "Product explainers and onboarding content",
              "priceCurrency": "USD",
              "price": "250",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD",
                "price": "250",
                "unitText": "FEATURE"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://thetechwriter.dev#website",
        "url": "https://thetechwriter.dev",
        "name": "The Tech Writer",
        "description": "Professional content writer for AI and SaaS products",
        "creator": {
          "@id": "https://thetechwriter.dev#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://thetechwriter.dev/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "CollectionPage",
        "@id": "https://thetechwriter.dev/work#portfolio",
        "url": "https://thetechwriter.dev/work",
        "name": "Portfolio - Content Writing Examples",
        "description": "Portfolio of content writing work including developer documentation, tutorials, blog posts, and product guides",
        "creator": {
          "@id": "https://thetechwriter.dev#person"
        }
      }
    ]
  };

  return (
    <Script
      id="seo-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
}
