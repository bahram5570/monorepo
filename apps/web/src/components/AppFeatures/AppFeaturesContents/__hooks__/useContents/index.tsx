import useBreakPoint from '@hooks/useBreakPoint';

import { useEffect, useState } from 'react';

import { APP_FEATURES_CONTENTS_LIST } from '../../../constants';
import { ContentsStylesTypes, UseContentsTypes } from './types';

const mobileRowCount = 34;
const mobileColCount = 24;
const mobileRowSize = 26.7;
const mobileColSize = 10.5;
const mobileGapSize = 4;

const desktopRowCount = 34;
const desktopColCount = 24;
const desktopRowSize = 31.2;
const desktopColSize = 24;
const desktopGapSize = 12;

const useContents = ({ currentTab }: UseContentsTypes) => {
  const selectedList = APP_FEATURES_CONTENTS_LIST[currentTab.toString()];

  const { breakPoint } = useBreakPoint();
  const [isRendered, setIsRendered] = useState(false);
  const [contentsStyles, setContentsStyles] = useState<ContentsStylesTypes>({
    maxHeight: 20000,
    gap: desktopGapSize,
    gridTemplateRows: `repeat(${desktopRowCount}, ${desktopRowSize}px)`,
    gridTemplateColumns: `repeat(${desktopColCount}, ${desktopColCount}px)`,
  });

  useEffect(() => {
    const result = { ...contentsStyles };
    let totalRows = 0;

    selectedList.forEach((item) => {
      const row = breakPoint.laptop ? item.mobile.row : item.desktop.row;
      const rowNumber = Number(row.split('/')[1]) - 1;

      if (rowNumber > totalRows) {
        totalRows = rowNumber;
      }
    });

    if (breakPoint.laptop) {
      result.gap = mobileGapSize;
      result.gridTemplateRows = `repeat(${mobileRowCount}, ${mobileRowSize}px)`;
      result.gridTemplateColumns = `repeat(${mobileColCount}, ${mobileColSize}px)`;
      result.maxHeight = totalRows * mobileRowSize + (totalRows - 1) * mobileGapSize;
    } else {
      result.gap = desktopGapSize;
      result.gridTemplateRows = `repeat(${desktopRowCount}, ${desktopRowSize}px)`;
      result.gridTemplateColumns = `repeat(${desktopColCount}, ${desktopColSize}px)`;
      result.maxHeight = totalRows * desktopRowSize + (totalRows - 1) * desktopGapSize;
    }

    setIsRendered(true);

    setContentsStyles(result);
  }, [selectedList, breakPoint.laptop]);

  return { contentsStyles, isRendered };
};

export default useContents;
