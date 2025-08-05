import Script from 'next/script';

const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  image: 'https://lh3.googleusercontent.com/p/AF1QipNRonN2AB7m5qMzwthBSNdRp1Cq7PZ67ZXSK9FF=s680-w680-h510',
  url: 'https://www.impo.app',
  sameAs: [],
  logo: '/assets/images/notLoaded.svg',
  name: 'Impo',
  description:
    'Impo is a user-friendly menstrual calendar app that helps individuals track their cycles, predict future periods, and access valuable menstrual health resources.',
  email: 'info@impo.app',
  telephone: '+985191014180',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Danesh Amooz 9',
    addressLocality: 'Mashhad',
    addressCountry: 'IR',
    addressRegion: 'Mashhad Razavi Khorasan Province',
    postalCode: '11111',
  },
  vatID: '',
  iso6523Code: '',
};

const HomeSchema = () => {
  return (
    <>
      <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }} />
    </>
  );
};

export default HomeSchema;
