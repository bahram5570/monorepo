import { memo } from 'react';

import SelectedIcon from '@assets/icons/selectedTick.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useSignIcon from './__hooks__/useSignIcon';
import useSignSelected from './__hooks__/useSignSelected';
import { ICONS_WIDTH, SIGNS_LIST } from './constants';
import { SignGeneratorProps } from './types';

const SignGenerator = ({ category, sign, initialIsSelected, onSelect, selectedDate }: SignGeneratorProps) => {
  const { colors } = useTheme();
  const { icon } = useSignIcon({ category, sign });
  const { isSelected, isSelectedHandler } = useSignSelected({
    sign,
    category,
    onSelect,
    selectedDate,
    initialIsSelected,
  });

  const borderColor = isSelected ? colors.PrimaryWoman_Primary : colors.Neutral_Surface;
  const title = SIGNS_LIST?.[category]?.signs?.[sign]?.title || '';

  return (
    <div className="cursor-pointer" onClick={isSelectedHandler}>
      <div className="flex flex-col items-center gap-2 pointer-events-none ">
        <div
          className="relative flex justify-center items-center border-[1px] rounded-full"
          style={{
            borderColor,
            width: ICONS_WIDTH,
            height: ICONS_WIDTH,
            minWidth: ICONS_WIDTH,
            minHeight: ICONS_WIDTH,
          }}
        >
          <>{icon}</>

          {isSelected && <SelectedIcon className="absolute -left-1 -bottom-1 w-6 h-auto" />}
        </div>

        <Typography scale="Body" size="Small" textAlign="center">
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default memo(SignGenerator, () => {
  return true;
});
