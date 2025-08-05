import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import ContactUsContainer from '@components/pages/contactUs/ContactUsContainer';

export const metadata: Metadata = {
  title: 'تماس با ما',
  description: 'ایمپو | تماس باما',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/contactUs`,
  },
};

const ContactUs = () => {
  return <ContactUsContainer />;
};

export default ContactUs;
