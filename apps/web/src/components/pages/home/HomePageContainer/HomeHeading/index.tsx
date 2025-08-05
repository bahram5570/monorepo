import LandingHeading from '@components/LandingHeading';

import HomeHeadingContent from './HomeHeadingContent';

const HomeHeading = () => {
  const contentElement = <HomeHeadingContent />;

  return (
    <LandingHeading
      imagePosition="center"
      contentElement={contentElement}
      imageClassName="lg:max-w-[700px]"
      image="/assets/images/headingMain.webp"
      backgroundImage={['#FEF2F5', '#FFDDE6']}
    />
  );
};

export default HomeHeading;
