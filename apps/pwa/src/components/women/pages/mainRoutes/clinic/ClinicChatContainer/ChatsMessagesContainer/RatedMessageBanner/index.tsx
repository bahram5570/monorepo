import StarIcon from '@assets/icons/star.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RATING_LIST } from '../../RatingContainer/RatingStars/constants';
import { RatedMessageBannerProps } from './types';

const RatedMessageBanner = ({ rate, description }: RatedMessageBannerProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full rounded-xl px-2 py-3 flex flex-col items-end gap-3 mt-10"
      style={{ backgroundColor: colors.PrimaryWoman_Primary }}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center px-2 py-1 rounded-full" style={{ backgroundColor: colors.White }}>
          <div className="flex items-center gap-1 pr-1">
            <Typography scale="Lable" size="Large" className="!h-5">
              {rate.toString()}
            </Typography>

            <StarIcon className="w-6 h-auto" style={{ fill: colors.Yellow }} />

            <div className="w-[1px] h-[20px]" style={{ backgroundColor: colors.Pink_200 }} />
          </div>

          <Typography scale="Body" size="Small">
            {RATING_LIST[rate - 1].script}
          </Typography>
        </div>

        <Typography scale="Lable" size="Medium" color="Neutral_Background">
          امتیاز شما به این مشاوره
        </Typography>
      </div>

      <Typography scale="Lable" size="Small" color="Neutral_Background">
        {description}
      </Typography>
    </div>
  );
};

export default RatedMessageBanner;
