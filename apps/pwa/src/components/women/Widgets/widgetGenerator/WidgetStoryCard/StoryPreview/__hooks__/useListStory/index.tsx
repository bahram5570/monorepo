import { useEffect, useRef, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useRouter } from 'next/navigation';
import { Swiper as SwiperTypes } from 'swiper/types';

import { NavigateStoryHandlerTypes, UseListStoryTypes } from './types';

const useListStory = (list: UseListStoryTypes) => {
  const router = useRouter();
  const { getQueryParams } = useQueryParamsHandler();
  const swiperRef = useRef<SwiperTypes | null>(null);
  const [storyIndex, setCurrentStorySlide] = useState(-1);

  const storyIndexHandler = (s: number) => {
    setCurrentStorySlide(s);
  };

  const navigateStoryHandler: NavigateStoryHandlerTypes = (goToNextStory) => {
    if (goToNextStory) {
      if (storyIndex >= list.length - 1) {
        router.back();
      } else {
        setCurrentStorySlide(storyIndex + 1);
        swiperRef.current?.slideNext();
      }
    } else {
      if (storyIndex > 0) {
        setCurrentStorySlide(storyIndex - 1);
        swiperRef.current?.slidePrev();
      }
    }
  };

  const storyId = getQueryParams(MODALS.STORY_MODAL_ID);
  const isOpen = storyId !== null && storyIndex > -1;

  useEffect(() => {
    const initialListIndex = list.findIndex((l) => l.id === storyId);
    setCurrentStorySlide(initialListIndex);
  }, [storyId]);

  return { swiperRef, isOpen, storyIndex, storyIndexHandler, navigateStoryHandler };
};

export default useListStory;
