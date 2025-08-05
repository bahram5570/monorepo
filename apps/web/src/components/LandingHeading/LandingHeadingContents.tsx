'use client';

import { LandingHeadingContentsTypes } from './types';

const LandingHeadingContents = ({ contentElement }: LandingHeadingContentsTypes) => {
  return (
    <div className="w-full md:w-1/2 md:pt-[180px] px-4 md:pl-0 md:pr-[100px] xl:pr-[100px] 2xl:pr-[300px]">
      <>{contentElement}</>
    </div>
  );
};

export default LandingHeadingContents;
