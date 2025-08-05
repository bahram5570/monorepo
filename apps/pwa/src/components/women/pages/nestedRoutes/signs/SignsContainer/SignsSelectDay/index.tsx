import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import SignsNavigation from './SignsNavigation';
import WeekNamesList from './WeekNamesList';
import { SIGNS_SELECT_DAY_HEIGHT } from './constants';
import { SignsSelectDayProps } from './types';

const SignsSelectDay = ({ slide, slideHandler, infoList }: SignsSelectDayProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="fixed left-0 right-0 top-0 px-4 pb-4 mx-auto flex items-end z-40"
      style={{
        backgroundColor: colors.Surface_SurfaceVariant,
        height: SIGNS_SELECT_DAY_HEIGHT,
        maxWidth: MAX_SCREEN_WIDTH,
      }}
    >
      <div className="w-full rounded-xl px-4 pt-6" style={{ backgroundColor: colors.White }}>
        <WeekNamesList slide={slide} infoList={infoList} />

        <div className="w-full h-[1px] block mt-2" style={{ backgroundColor: colors.Neutral_Surface }} />

        <SignsNavigation slide={slide} slideHandler={slideHandler} infoList={infoList} />
      </div>
    </div>
  );
};

export default SignsSelectDay;
