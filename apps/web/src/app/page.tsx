import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import HomePageContainer from '@components/pages/home/HomePageContainer';

import HomeSchema from '../schema/HomeSchema';

export const metadata: Metadata = {
  title: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: 'index, follow',
  alternates: {
    canonical: HOST_URL,
  },
};

const Home = () => {
  return (
    <>
      <HomeSchema />
      <HomePageContainer />
    </>
  );
};

export default Home;
