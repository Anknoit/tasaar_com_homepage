export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tasaar',
    url: 'https://tasaar.com',
    logo: 'https://tasaar.com/white_logo-Photoroom.png',
    description: 'Engineering the Intelligence & AI layer for Network Operations, Industrial IoT, and AI Communication Chatbots.',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/tasaar',
      'https://linkedin.com/company/tasaar'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@tasaar.com',
      contactType: 'customer support'
    }
  };
  return <JsonLd data={schema} />;
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tasaar',
    url: 'https://tasaar.com',
    description: 'Industrial IoT, AI Integration, Network Operations & AI Communication Chatbots (WhatsApp & RCS)',
    publisher: {
      '@type': 'Organization',
      name: 'Tasaar'
    }
  };
  return <JsonLd data={schema} />;
}

export function SoftwareAppSchema({ name, description, category, url, features }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: name,
    description: description,
    applicationCategory: category || 'BusinessApplication',
    operatingSystem: 'All',
    url: url,
    author: {
      '@type': 'Organization',
      name: 'Tasaar',
      url: 'https://tasaar.com'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock'
    },
    featureList: features || []
  };
  return <JsonLd data={schema} />;
}

export function FAQSchema({ faqs }) {
  if (!faqs || !faqs.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
  return <JsonLd data={schema} />;
}

export function ArticleSchema({ post }) {
  if (!post) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date ? new Date(post.date).toISOString() : new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: post.author || 'Ankit Jha'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tasaar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tasaar.com/white_logo-Photoroom.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://tasaar.com/blog/${post.slug}`
    },
    image: post.coverImage ? `https://tasaar.com${post.coverImage}` : 'https://tasaar.com/og-image.png'
  };
  return <JsonLd data={schema} />;
}
