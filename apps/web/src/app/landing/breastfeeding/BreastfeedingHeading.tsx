import LandingHeading from '@components/LandingHeading';

import LandingsContentsGenerator from '../LandingsContentsGenerator';
import { BREASTFEEDING_HEADING_DATA } from './constants';

const BreastfeedingHeading = () => {
  const contentElement = (
    <LandingsContentsGenerator
      title={BREASTFEEDING_HEADING_DATA.title}
      description={BREASTFEEDING_HEADING_DATA.description}
    />
  );

  return (
    <LandingHeading
      imagePosition="bottom"
      contentElement={contentElement}
      image={BREASTFEEDING_HEADING_DATA.image}
      backgroundImage={[BREASTFEEDING_HEADING_DATA.gradientFrom, BREASTFEEDING_HEADING_DATA.gradientTo]}
    />
  );
};

export default BreastfeedingHeading;
