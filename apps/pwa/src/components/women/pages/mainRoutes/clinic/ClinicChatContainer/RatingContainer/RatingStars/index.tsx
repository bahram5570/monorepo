import StarIcon from '@assets/icons/star.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RATING_LIST } from './constants';
import { RatingStarsProps } from './types';

const RatingStars = ({ rate, rateHandler }: RatingStarsProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex flex-col items-center gap-2 py-4">
      <div className="flex items-center justify-between w-[220px] pb-2">
        {RATING_LIST.map((item) => (
          <StarIcon
            onClick={() => rateHandler(item.no)}
            style={{
              stroke: item.no <= rate ? colors.Yellow : colors.Surface_OutlineVariant,
              fill: item.no <= rate ? colors.Yellow : colors.Transparent,
            }}
            className="w-8 h-auto cursor-pointer"
            key={item.no}
          />
        ))}
      </div>

      {rate === 0 && (
        <div className="flex justify-between w-[230px]">
          <Typography scale="Body" size="Small">
            {RATING_LIST[0].script}
          </Typography>

          <Typography scale="Body" size="Small">
            {RATING_LIST[4].script}
          </Typography>
        </div>
      )}

      {rate > 0 && (
        <div className="flex justify-center w-[230px]">
          <Typography scale="Lable" size="Large">
            {RATING_LIST[rate - 1].script}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default RatingStars;
