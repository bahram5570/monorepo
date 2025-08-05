import LandingHeading from '@components/LandingHeading';

import MenHeadingContents from './MenHeadingContents';

const MenHeading = () => {
  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={<MenHeadingContents />}
      image="/assets/images/menLandingImage.webp"
      backgroundImage="/assets/images/menLandingBackground.webp"
    />
  );
};

export default MenHeading;
