import LandingHeading from '@components/LandingHeading';

import SympathyHeadingContents from './SympathyHeadingContents';

const SympathyHeading = () => {
  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={<SympathyHeadingContents />}
      image="/assets/images/sympathyLandingImage.webp"
      backgroundImage="/assets/images/sympathyLandingBackground.webp"
    />
  );
};

export default SympathyHeading;
