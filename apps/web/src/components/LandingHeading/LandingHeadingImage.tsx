import CustomImage from '@components/ui/CustomImage';

import { LandingHeadingImageTypes } from './types';

const LandingHeadingImage = ({ image, imageClassName, imagePosition }: LandingHeadingImageTypes) => {
  return (
    <div className="w-full h-full md:w-1/2 flex justify-center md:justify-start md:pl-5 xl:pr-[40px]">
      <div
        style={{ alignSelf: imagePosition === 'center' ? 'center' : 'flex-end' }}
        className={`relative w-full max-w-[440px] md:max-w-[400px] lg:max-w-[580px] ${imageClassName || ''}`}
      >
        <CustomImage
          width={0}
          height={0}
          alt="impo"
          src={image}
          sizes="100vw"
          priority={true}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default LandingHeadingImage;
