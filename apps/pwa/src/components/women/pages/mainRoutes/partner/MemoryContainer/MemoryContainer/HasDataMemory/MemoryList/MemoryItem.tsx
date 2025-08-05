import { useEffect, useState } from 'react';

import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import useCalendarDateFormat from '../../../../__hooks__/useCalendarDateFormat';
import { MemoryItemPropsType } from '../../type';

const MemoryItem = (props: MemoryItemPropsType) => {
  const { colors } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { currentDate } = useCalendarDateFormat({ date: props.time });

  const memoryImage = props.fileName || '/assets/images/partner.webp';
  const memoryText = textShorter(props.text, 150);

  return (
    <Link
      href={`/protected/partner/memory/${props.id}?page=${props.currentPage}`}
      onClick={() => pageNavigationHandler({ id: 'memory', showProgressBar: true })}
      className="flex flex-col justify-end items-end p-2 gap-2"
    >
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="right" className="w-full">
        {currentDate}
      </Typography>
      <CustomImage src={memoryImage} height={293} className="rounded-2xl w-full" />
      <div className="flex flex-col justify-end items-end">
        <div className="flex gap-2 items-center">
          <Typography scale="Lable" size="Large">
            {props.title}
          </Typography>
          <div className="w-2 h-2 rounded-full" style={{ background: colors.PrimaryWoman_Primary }}></div>
        </div>

        <Typography scale="Body" size="Small">
          {memoryText}
        </Typography>
      </div>
    </Link>
  );
};

export default MemoryItem;
