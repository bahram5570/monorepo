import StarIcon from '@assets/icons/star-1.svg';

import useTheme from '@hooks/useTheme';

import { StarRatePropsType } from './type';

const StarRate = ({ valuesHandler, rate }: StarRatePropsType) => {
  const { colors } = useTheme();

  const getTitle = (index: number) => {
    if (index === 0) return 'خیلی بد';
    if (index === 4) return 'خیلی خوب';
    return '';
  };

  const handleRatingChange = (index: number) => {
    valuesHandler({ name: 'rate', value: index + 1 });
  };

  return (
    <div className="flex gap-2 justify-center items-center w-full">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="relative">
          <StarIcon
            className="w-11 h-11"
            style={{
              stroke: index < rate ? colors.Pink_400 : colors.Surface_OutlineVariant,
              fill: index < rate ? colors.Pink_400 : colors.Surface_OutlineVariant,
              cursor: 'pointer',
            }}
            onClick={() => handleRatingChange(index)}
          />
          {getTitle(index) && (
            <div
              className="absolute top-14 text-sm text-center w-full whitespace-nowrap"
              style={{ fontSize: '12px', color: '#333' }}
            >
              {getTitle(index)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StarRate;
