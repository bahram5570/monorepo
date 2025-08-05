import Script from 'next/script';

const CategorySchema = ({ id }) => {
  const Article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: id,
    image: [],
    datePublished: '',
    dateModified: '',
    author: [],
  };

  const BreadCrumb = {
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
        name: id,
        item: `https://impo.app/category/${id}`,
      },
    ],
  };
  return (
    <>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Article) }} />
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadCrumb) }} />
    </>
  );
};

export default CategorySchema;
