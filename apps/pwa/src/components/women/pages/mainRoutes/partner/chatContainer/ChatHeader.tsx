import { useEffect, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow.svg';
import { gregorianFarsiScriptDate, jalaaliScriptDate } from '@utils/dates';

import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import useCalendarDateFormat from '../__hooks__/useCalendarDateFormat';
import ProgressBar from './ProgressBar';
import { ChatHeaderPropsType } from './type';

const ChatHeader = ({ createTime, partnerAvatar, partnerName, progress, avatar }: ChatHeaderPropsType) => {
  const { colors } = useTheme();
  const { currentDate } = useCalendarDateFormat({ date: createTime });
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  return (
    <div
      className="flex items-end flex-col w-full backdrop-blur-md py-4 px-2 gap-4 mx-auto fixed top-0 left-0 right-0 z-40 "
      style={{ maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="flex px-4 py-2 w-full justify-end">
        <div className="flex items-center gap-4 min-w-fit">
          <div className="flex flex-row-reverse gap-2 items-center">
            <CustomImage
              src={partnerAvatar || '/assets/images/man.webp'}
              width={40}
              height={40}
              className="rounded-full !object-cover"
            />
            <div className="flex flex-col items-end justify-end">
              <Typography scale="Title" size="Small" color="Neutral_OnBackground">
                {partnerName}
              </Typography>

              <Typography
                scale="Body"
                size="Small"
                color="Neutral_OnBackground"
              >{`تاریخ شروع چت :${currentDate}`}</Typography>
            </div>
          </div>

          <div
            className="cursor-pointer flex justify-center items-center"
            style={{ width: 32, height: 32 }}
            onClick={() => {
              pageNavigationHandler({ showProgressBar: false, linkTo: -1, id: 'back' });
            }}
          >
            {pageNavigationLoading === 'back' && <Spinner color="outline" width={28} />}
            {pageNavigationLoading !== 'back' && (
              <ArrowIcon className="w-6 h-full stroke-2" style={{ stroke: colors.Surface_Outline }} />
            )}
          </div>
        </div>
      </div>
      <ProgressBar progress={progress} avatar={avatar} partnerAvatar={partnerAvatar} />
    </div>
  );
};

export default ChatHeader;
