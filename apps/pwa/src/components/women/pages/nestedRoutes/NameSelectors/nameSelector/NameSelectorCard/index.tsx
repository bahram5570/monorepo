import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import HeartEmptyIcon from '@assets/icons/heartEmpty.svg';
import HeartFillIcon from '@assets/icons/heartFill.svg';
import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import CustomImage from '@components/ui/CustomImage';
import Spinner from '@components/ui/Spinner';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useNameSelectorLike from '../__hooks__/useNameSelectorLike';
import { NAME_SELECTOR_CARD_HEIGHT } from './constants';
import { NameSelectorCardProps } from './types';

const NameSelectorCard = (props: NameSelectorCardProps) => {
  const { ref, inView } = useInView();
  const { colors, typography } = useTheme();
  const { isLikedHandler } = useNameSelectorLike();

  const isLastIndex = props.onPagination && props.isLastIndex;
  const isLoading = props.onPagination && isLastIndex && props.isLoading;

  useEffect(() => {
    if (isLastIndex && inView && props.onPagination && !isLoading) {
      props.onPagination();
    }
  }, [isLastIndex, isLoading, inView]);

  const isGirl = props.gender === SelectNameGenderEnum.Girl;
  const cardColor = isGirl ? colors.Pink_100 : colors.Blue_100;
  const lineColor = isGirl ? colors.Pink_200 : colors.Blue_200;
  const image = isGirl ? '/assets/images/selectNameGirl.webp' : '/assets/images/selectNameBoy.webp';

  return (
    <>
      {props.startingLetter && (
        <div
          style={{ borderColor: colors.Neutral_Surface }}
          className="flex justify-end w-full border-b-[1px] pb-2 pt-6"
        >
          <Typography scale="Lable" size="Large" color="Surface_InverseSurface">
            {props.startingLetter}
          </Typography>
        </div>
      )}

      <div
        ref={ref}
        className="w-full p-3 rounded-xl"
        style={{ backgroundColor: cardColor, direction: 'rtl', minHeight: NAME_SELECTOR_CARD_HEIGHT }}
      >
        {inView && (
          <>
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="relative min-w-10 min-h-10 rounded-full overflow-hidden"
                  style={{ backgroundColor: colors.White }}
                >
                  <CustomImage src={image} className="absolute top-[1px] -left-[2px] w-[66px] h-[66px]" />
                </div>

                <Typography scale="Lable" size="Large" color="Surface_InverseSurface">
                  {props.title}
                </Typography>
              </div>

              <div onClick={() => isLikedHandler(props)} className="w-10 h-10 flex items-center justify-center">
                {props.isLiked ? (
                  <HeartFillIcon className="w-5 h-auto" style={{ fill: colors.PrimaryWoman_Primary }} />
                ) : (
                  <HeartEmptyIcon className="w-5 h-auto" style={{ fill: colors.Surface_Outline }} />
                )}
              </div>
            </div>

            <div className="w-full h-[1px] my-2" style={{ backgroundColor: lineColor }} />

            <p style={{ color: colors.Surface_InverseSurface }}>
              <span style={{ ...typography.Lable.Medium }}>معنا: </span>
              <span style={{ ...typography.Body.Small }}>{props.description}</span>
            </p>
          </>
        )}
      </div>

      {isLoading && (
        <div className="w-full h-[150px] flex justify-center pt-[50px]">
          <Spinner color="outline" />
        </div>
      )}
    </>
  );
};

export default NameSelectorCard;
