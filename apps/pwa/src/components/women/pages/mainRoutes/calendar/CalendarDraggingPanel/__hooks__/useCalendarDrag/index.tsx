import { useEffect, useRef, useState } from 'react';

import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useOperatingSystem from '@hooks/useOperatingSystem';

import { SIGNS_LIST_SLIDER_ID } from '../../SelectedDaySigns/SelectedDaySignsContainer/constants';
import { CALENDAR_DRAGGING_PANEL_ID } from '../../constants';

const useCalendarDrag = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { operatingSystem } = useOperatingSystem();

  const [positionY, setPositionY] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  let initialTop: null | number = null;
  const positionYHandler = (clientY: number) => {
    setIsDragging(true);

    if (initialTop === null) {
      initialTop = clientY - positionY;
    }

    const parentEl = document.getElementById(CALENDAR_DRAGGING_PANEL_ID);

    if (parentEl) {
      const yValue = clientY - initialTop;
      const parentPosition = parentEl.offsetTop - HEADER_HEIGHT;
      const contentsHeight = parentEl.children[0].children[0].clientHeight - 200;

      if (Math.abs(yValue) - contentsHeight > parentPosition) {
        setPositionY(-parentPosition - contentsHeight);
      } else if (yValue > 0) {
        setPositionY(0);
      } else {
        setPositionY(yValue);
      }
    }
  };

  useEffect(() => {
    const el = ref.current;

    if (el) {
      const beginDraggingHandler = (e: TouchEvent | MouseEvent) => {
        // # Allows to disable the scrolling. For cases like horizontal scrolling
        if (e?.target instanceof HTMLElement) {
          if (e.target.id !== SIGNS_LIST_SLIDER_ID) {
            setIsGrabbing(true);
          }
        }
      };

      const finishDraggingHandler = () => {
        setIsGrabbing(false);
        setIsDragging(false);
        initialTop = null;
      };

      const mouseMovingHandler = (e: MouseEvent) => {
        if (isGrabbing) {
          const clientY = e.clientY;
          positionYHandler(clientY);
        }
      };

      const touchMovingHandler = (e: TouchEvent) => {
        if (isGrabbing) {
          const clientY = e.touches[0].clientY;
          positionYHandler(clientY);
          e.preventDefault();
        }
      };

      // # Begin grabbing
      if (operatingSystem === 'windows') {
        el.addEventListener('mousedown', beginDraggingHandler);
      }
      if (operatingSystem !== 'windows') {
        el.addEventListener('touchstart', beginDraggingHandler);
      }

      // # Finish grabbing
      if (operatingSystem === 'windows') {
        el.addEventListener('mouseup', finishDraggingHandler);
      }
      if (operatingSystem !== 'windows') {
        el.addEventListener('touchend', finishDraggingHandler);
      }

      // # Mouse moving
      if (operatingSystem === 'windows') {
        el.addEventListener('mousemove', mouseMovingHandler);
      }
      if (operatingSystem !== 'windows') {
        el.addEventListener('touchmove', touchMovingHandler);
      }

      return () => {
        el.removeEventListener('mousedown', beginDraggingHandler);
        el.removeEventListener('touchstart', beginDraggingHandler);
        el.removeEventListener('mouseup', finishDraggingHandler);
        el.removeEventListener('touchend', finishDraggingHandler);
        el.removeEventListener('mousemove', mouseMovingHandler);
        el.removeEventListener('touchmove', touchMovingHandler);
      };
    }
  }, [isGrabbing]);

  return { ref, isDragging, positionY };
};

export default useCalendarDrag;
