import { COLORS_LIST } from '@theme/colors';

import { CAREER_CONTAINER_MAX_WIDTH } from '@components/pages/careers/constants';
import CustomTypography from '@components/ui/CustomTypography';

import CardGenerator from './CardGenerator';
import { CareersOpportunitiesTypes } from './types';

const CareersOpportunities = ({ opportunities }: CareersOpportunitiesTypes) => {
  return (
    <div style={{ maxWidth: CAREER_CONTAINER_MAX_WIDTH }} className="w-full flex flex-col items-center px-4 mx-auto">
      <CustomTypography tagType="h2" fontSize="Headline_Medium" color={'Neutral_OnBackground'} className="pb-6 md:pb-8">
        فرصت‌های شغلی
      </CustomTypography>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {opportunities.map((item, index) => (
          <CardGenerator {...item} key={index} />
        ))}
      </div>

      <div className="w-full h-[1px] mt-8 md:mt-16" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
    </div>
  );
};

export default CareersOpportunities;
