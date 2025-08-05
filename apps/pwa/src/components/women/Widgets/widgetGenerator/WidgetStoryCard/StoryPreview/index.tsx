import CustomModal from '@components/ui/CustomModal';
import 'swiper/css/effect-flip';
// import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import StoryPreviewListGenerator from './StoryPreviewListGenerator';
import useCurrentStory from './__hooks__/useListStory';
import useStoryUpdate from './__hooks__/useStoryUpdate';
import { StoryPreviewPorps } from './types';

const StoryPreview = ({ list, saveHandler }: StoryPreviewPorps) => {
  const { swiperRef, isOpen, storyIndex, storyIndexHandler, navigateStoryHandler } = useCurrentStory(list);

  const { viewStoryHandler, isBookmarkedHandler } = useStoryUpdate({ isOpen, list });

  const saveStoryHandler = (storyId: string) => {
    isBookmarkedHandler(storyId);

    if (saveHandler) {
      saveHandler(storyId);
    }
  };

  return (
    <>
      <CustomModal isFullScreen={true} isOpen={isOpen} backgroundColor="#000000" className="!p-0">
        <>
          {isOpen && (
            <Swiper
              dir="rtl"
              // effect="flip"
              className="w-full h-full"
              initialSlide={storyIndex}
              onSwiper={(s) => (swiperRef.current = s)}
              // modules={[EffectFlip, Pagination, Navigation]}
              onSlideChange={(s) => storyIndexHandler(s.activeIndex)}
            >
              {list.map((item, index) => (
                <SwiperSlide key={index}>
                  <StoryPreviewListGenerator
                    storyItems={item}
                    viewStoryHandler={viewStoryHandler}
                    isBookmarkedHandler={saveStoryHandler}
                    isCurrentStorySlide={storyIndex === index}
                    navigateStoryHandler={navigateStoryHandler}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </>
      </CustomModal>
    </>
  );
};

export default StoryPreview;
