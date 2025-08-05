import { useEffect, useState } from 'react';

import { WidgetStoryTypeEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import {
  SlideIndexHandlerTypes,
  StoryEventsCtaButtonTypes,
  StoryEventsImageTypes,
  StoryEventsVideoTypes,
  UseStorySlidesProps,
} from './types';

const useStorySlides = ({ stories, navigateStoryHandler, viewStoryHandler }: UseStorySlidesProps) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const index = stories.findIndex((story) => !story.isViewed);
    const initialIndex = index > -1 ? index : 0;
    setCurrentSlideIndex(initialIndex);
  }, [stories]);

  const slideIndexHandler: SlideIndexHandlerTypes = (goToNextSlide) => {
    if (goToNextSlide) {
      if (currentSlideIndex >= stories.length - 1) {
        navigateStoryHandler(true);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
        setIsLoading(true);
      }

      const slideId = stories[currentSlideIndex].id;
      viewStoryHandler(slideId);
    } else {
      if (currentSlideIndex <= 0) {
        navigateStoryHandler(false);
      } else {
        setCurrentSlideIndex(currentSlideIndex - 1);
        setIsLoading(true);
      }
    }
  };

  let ctaButton = null as StoryEventsCtaButtonTypes;
  let image = null as StoryEventsImageTypes;
  let video = null as StoryEventsVideoTypes;

  stories[currentSlideIndex]?.events.forEach((item) => {
    switch (item.type) {
      case WidgetStoryTypeEnum.CtaButton:
        ctaButton = item.button;
        break;
      case WidgetStoryTypeEnum.Image:
        image = item.url.trim();
        break;
      case WidgetStoryTypeEnum.Video:
        video = item.url.trim();
        break;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  const isLoadingHandler = () => {
    setIsLoading(false);
  };

  return { currentSlideIndex, slideIndexHandler, isLoading, isLoadingHandler, ctaButton, image, video };
};

export default useStorySlides;
