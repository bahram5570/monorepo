'use client';

import BackButton from '@components/ui/BackButton';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { NAME_SELECTOR_HEADING_HEIGHT, NAME_SELECTOR_HEADING_WIDTH } from '../constants';
import { NameSelectorHeadingProps } from './types';

const NameSelectorHeading = ({ description }: NameSelectorHeadingProps) => {
  return (
    <div className="relative w-full flex flex-col overflow-hidden">
      <div className="relative flex justify-center items-end w-full" style={{ height: NAME_SELECTOR_HEADING_HEIGHT }}>
        <div
          className="flex items-end rounded-full overflow-hidden bg-gradient-to-b from-[#FFB68FB8] to-[#FF5A3D29]"
          style={{ minHeight: NAME_SELECTOR_HEADING_WIDTH, minWidth: NAME_SELECTOR_HEADING_WIDTH }}
        >
          <div
            className="relative w-[100dvw] mx-auto flex gap-2"
            style={{ height: NAME_SELECTOR_HEADING_HEIGHT, maxWidth: MAX_SCREEN_WIDTH }}
          >
            <CustomImage
              src={'/assets/images/selectNameHeartsMask.webp'}
              className="absolute top-0 left-0 right-0 bottom-0 opacity-50 pointer-events-none"
            />

            <CustomImage src={'/assets/images/selectNameMom.webp'} width={120} height={190} className="mt-auto" />

            <div className="">
              <div className="w-12 h-12 flex justify-center items-center my-4 mr-4 ml-auto">
                <BackButton variant="text" color="outline" />
              </div>

              <Typography scale="Body" size="Medium" color="Surface_InverseSurface" className="pr-4">
                {description}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSelectorHeading;
