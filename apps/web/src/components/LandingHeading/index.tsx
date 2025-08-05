import LandingHeadingContents from './LandingHeadingContents';
import LandingHeadingImage from './LandingHeadingImage';
import { LandingHeadingTypes } from './types';

const LandingHeading = ({
  backgroundImage,
  contentElement,
  imageClassName,
  imagePosition,
  image,
}: LandingHeadingTypes) => {
  const bg =
    typeof backgroundImage === 'string'
      ? `url(${backgroundImage})`
      : `linear-gradient(to bottom, ${backgroundImage[0]} , ${backgroundImage[1]})`;

  return (
    <div className="relative w-full h-[680px] md:h-[520px] lg:h-[680px] xl:h-[750px] flex flex-col items-end justify-center overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 flex justify-center z-10">
        <div className="w-[700dvw] h-[700dvw] min-w-[700dvw] min-h-[700dvw] rounded-full flex items-end overflow-hidden">
          <div
            style={{ backgroundImage: bg }}
            className="
                        w-[100dvw] 
                        h-[680px] 
                        xl:h-[750px] 
                        mx-auto 
                        flex 
                        items-center 
                        justify-center 
                        bg-cover 
                        bg-center
                      "
          >
            <div className="h-full w-full flex flex-col md:flex-row gap-2 md:gap-10 xl:gap-14 pt-[100px] md:pt-[160px] lg:pt-[100px]">
              <LandingHeadingContents contentElement={contentElement} />
              <LandingHeadingImage image={image} imagePosition={imagePosition} imageClassName={imageClassName} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeading;
