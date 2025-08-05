import Script from 'next/script';

const ArticleSchema = ({ data }) => {
  const extractImageSrc = (htmlString) => {
    if (typeof window === 'undefined') {
      return [];
    }

    const parser = new window.DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const imageElements = doc.querySelectorAll('img');
    const imageSources = [];
    imageElements.forEach((img) => {
      const src = img.getAttribute('src');
      if (src) {
        imageSources.push(src);
      }
    });
    return imageSources;
  };

  const extractedSrcImages = extractImageSrc(data?.body);

  const FAQS = data?.faqs;

  FAQS?.forEach((fa) => {
    fa['@type'] = 'Question';
    fa.name = fa.question;
    fa.acceptedAnswer = {
      '@type': 'Answer',
      text: String(fa.answer),
    };
  });

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS || [],
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data?.title,
    image: extractedSrcImages,
    datePublished: data?.createTime + '.0000',
    dateModified: data?.createTime + '.0000',
    author: [
      {
        '@type': 'Person',
        name: data?.author?.authorName,
        url: `https://impo.app/author/${data?.author?.authorName}`,
      },
    ],
    // aggregateRating: {
    //   "@type": "AggregateRating",
    //   ratingValue: data?.rate,
    //   bestRating: "5",
    //   ratingCount: data?.rateCount
    // }
  };

  const schemaBreadCrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://impo.app/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'blogs',
        item: 'https://impo.app/blogs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data?.categories?.[0]?.title,
        item: `https://impo.app/category/${data?.title}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: data?.title,
        item: `https://impo.app/${data?.title}`,
      },
    ],
  };

  return (
    <>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadCrumb) }} />
    </>
  );
};

export default ArticleSchema;
