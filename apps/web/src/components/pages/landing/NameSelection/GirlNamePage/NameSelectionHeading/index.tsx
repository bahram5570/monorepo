import LandingHeadingContents from '@components/LandingHeading/LandingHeadingContents';
import LandingHeadingImage from '@components/LandingHeading/LandingHeadingImage';

import NameSelectionHeadingContent from './NameSelectionHeadingContent';

const NameSelectionHeading = () => {
  const contentElement = <NameSelectionHeadingContent />;

  return (
    <div className="relative w-full h-[900px] md:h-[520px] lg:h-[900px] xl:h-[750px] flex flex-col items-end justify-center overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 flex justify-center z-10">
        <div className="w-[700dvw] h-[700dvw] min-w-[700dvw] min-h-[700dvw] rounded-full flex items-end overflow-hidden">
          <div
            style={{ backgroundImage: 'linear-gradient(to bottom, #FEF2F5 , #FFDDE6)' }}
            className="
                        w-[100dvw] 
                        h-[900px] 
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
              <LandingHeadingImage
                imagePosition={'bottom'}
                image="/assets/images/heading-girlNameSelection.webp"
                imageClassName="lg:max-w-[580px] lg:max-h-[513px]  max-w-[200px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NameSelectionHeading;
