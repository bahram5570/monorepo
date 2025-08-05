'use client';

import CustomTypography from '@components/ui/CustomTypography';

import SlidesLong from './SlidesLong';
import SlidesShort from './SlidesShort';
import { CalendarOfPregnancySlidesGeneratorTypes } from './types';

const CalendarOfPregnancySlidesGenerator = ({ title, description, list }: CalendarOfPregnancySlidesGeneratorTypes) => {
  const isLongList = list.length > 5;

  return (
    <div className="w-full">
      <CustomTypography fontSize="Headline_Medium" tagType="h2" className="text-center">
        {title}
      </CustomTypography>

      <CustomTypography fontSize="Body_Small" color="Surface_Outline" className="text-center pb-6">
        {description}
      </CustomTypography>

      {isLongList ? <SlidesLong list={list} /> : <SlidesShort list={list} />}
    </div>
  );
};

export default CalendarOfPregnancySlidesGenerator;
