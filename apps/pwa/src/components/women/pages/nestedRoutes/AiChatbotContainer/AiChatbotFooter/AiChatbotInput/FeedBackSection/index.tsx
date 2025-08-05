import { useEffect, useState } from 'react';

import DislikeFillIcon from '@assets/icons/Dislike-fill.svg';
import DislikeIcon from '@assets/icons/Dislike.svg';
import LikeIcon from '@assets/icons/Like-1.svg';
import LikeFillIcon from '@assets/icons/Like-fill.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useFeedBack from './__hooks__/useFeedBack';
import { FeedBackEnum } from './__hooks__/useFeedBack/enum';
import { FeedBackSectionPropsType } from './type';

const FeedBackSection = ({ activeRating, feedbackMessage, chatId }: FeedBackSectionPropsType) => {
  const [feedback, setFeedback] = useState<FeedBackEnum | null>(null);
  const { colors } = useTheme();
  const { feedbackHandler } = useFeedBack({ chatId });

  useEffect(() => {
    if (!feedback) return;
    feedbackHandler(feedback);
  }, [feedback]);

  return (
    <div
      className={` absolute left-0 right-0 w-full h-full p-3 ${activeRating ? 'top-[-56px]' : 'top-full'} transition-all`}
      style={{
        backgroundColor: colors.Surface_Scrim,
        transitionDuration: '800ms',
        transitionTimingFunction: 'cubic-bezier(0.25, 0.8, 0.25, 1)',
      }}
    >
      <div className="flex flex-row-reverse justify-between items-center px-3">
        <Typography scale="Lable" size="Large" color="White">
          {feedbackMessage}
        </Typography>
        <div className="flex flex-row-reverse gap-2">
          <div
            className="w-8 h-8 rounded-full flex justify-center items-center"
            style={{ border: `1px solid ${colors.Surface_OnSurfaceVariant}` }}
            onClick={() => {
              setFeedback(FeedBackEnum.Dislike);
            }}
          >
            {feedback === FeedBackEnum.Dislike ? (
              <DislikeFillIcon className="w-4 h-4" style={{ fill: colors.White }} />
            ) : (
              <DislikeIcon className="w-4 h-4" style={{ fill: colors.White }} />
            )}
          </div>

          <div
            className="w-8 h-8 rounded-full flex justify-center items-center"
            style={{ border: `1px solid ${colors.Surface_OnSurfaceVariant}` }}
            onClick={() => {
              setFeedback(FeedBackEnum.Like);
            }}
          >
            {feedback === FeedBackEnum.Like ? (
              <LikeFillIcon className="w-4 h-4" style={{ fill: colors.White }} />
            ) : (
              <LikeIcon className="w-4 h-4" style={{ fill: colors.White }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackSection;
