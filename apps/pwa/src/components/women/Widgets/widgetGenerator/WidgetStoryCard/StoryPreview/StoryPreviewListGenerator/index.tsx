import { colorFormatConverter } from '@utils/scripts';
import Image from 'next/image';

import Button from '@components/ui/Button';
import useWidgetActions from '@hooks/useWidgetActions';

import ProgressBars from './ProgressBars';
import SaveStory from './SaveStory';
import SlidesNavigation from './SlidesNavigation';
import StoriesLoading from './StoriesLoading';
import useCheckVideoSrc from './__hooks__/useCheckVideoSrc';
import useStorySlides from './__hooks__/useStorySlides';
import { StoryPreviewListGeneratorProps } from './types';

const StoryPreviewListGenerator = ({
  navigateStoryHandler,
  isBookmarkedHandler,
  isCurrentStorySlide,
  viewStoryHandler,
  storyItems,
}: StoryPreviewListGeneratorProps) => {
  const { actionHandler } = useWidgetActions();
  // const {checkFormatVideo}=useCheckVideoSrc()
  const storySlideProps = useStorySlides({ stories: storyItems.stories, viewStoryHandler, navigateStoryHandler });

  return (
    <div className="relative w-full h-full">
      <div className="relative w-full aspect-[9_/_16] flex flex-col">
        <ProgressBars
          stories={storyItems.stories}
          viewStoryHandler={viewStoryHandler}
          isLoading={storySlideProps.isLoading}
          isCurrentStorySlide={isCurrentStorySlide}
          currentSlideIndex={storySlideProps.currentSlideIndex}
          slideIndexHandler={storySlideProps.slideIndexHandler}
        />

        <SlidesNavigation slideIndexHandler={storySlideProps.slideIndexHandler} />

        {storySlideProps.isLoading && <StoriesLoading />}

        {storySlideProps.image !== null && (
          <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none">
            <Image
              fill={true}
              className="w-full h-auto"
              src={storySlideProps.image}
              alt={storySlideProps.image}
              onLoad={storySlideProps.isLoadingHandler}
              key={storySlideProps.image + storySlideProps.currentSlideIndex}
            />
          </div>
        )}

        {storySlideProps.video !== null && (
          <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none">
            <video
              autoPlay={true}
              controls={false}
              className="w-full h-auto"
              onCanPlayThrough={storySlideProps.isLoadingHandler}
              playsInline
              webkit-playsinline="true"
              key={storySlideProps.video + storySlideProps.currentSlideIndex}
            >
              {/* <source src={checkFormatVideo(storySlideProps.video) } /> */}
              <source src={storySlideProps.video} />
            </video>
          </div>
        )}

        {storySlideProps.ctaButton !== null && (
          <div className="mt-auto p-4 z-20">
            <Button
              size="medium"
              variant="fill"
              color="FREE-STYLES"
              onClick={() => actionHandler(storySlideProps.ctaButton!.action)}
              buttonColor={colorFormatConverter(storySlideProps.ctaButton.backgroundColor)}
              contentsColor={colorFormatConverter(storySlideProps.ctaButton.foregroundColor)}
            >
              {storySlideProps.ctaButton.text}
            </Button>
          </div>
        )}
      </div>

      <SaveStory selectHandler={() => isBookmarkedHandler(storyItems.id)} isBookmarked={storyItems.isBookmarked} />
    </div>
  );
};

export default StoryPreviewListGenerator;
