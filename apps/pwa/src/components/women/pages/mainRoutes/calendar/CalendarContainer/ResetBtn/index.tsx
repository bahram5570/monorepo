import { useMemo } from 'react';

import ResetIcon from '@assets/icons/calendarReset.svg';
import { currentDate } from '@utils/dates';

import Button from '@components/ui/Button';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import useTheme from '@hooks/useTheme';

import { RESET_BUTTON_MAX_HEIGHT } from './constants';
import { ResetBtnProps } from './types';

const { jDate, gDate } = currentDate();

const ResetBtn = ({ selectedDate, resetKeyHandler }: ResetBtnProps) => {
  const { colors } = useTheme();
  const { culture } = useCulture();

  const dateType = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return jDate;
      case CalendarTypeEnum.Gregorian:
        return gDate;
      default:
        return jDate;
    }
  }, [culture.calendarType]);

  const isTodaySelected = selectedDate === dateType;

  return (
    <div
      className="w-full flex justify-center pt-4 overflow-hidden duration-200"
      style={{ maxHeight: isTodaySelected ? 0 : RESET_BUTTON_MAX_HEIGHT }}
    >
      <Button
        size="small"
        variant="outline"
        color="FREE-STYLES"
        fullWidth={false}
        buttonColor={colors.Neutral_Surface}
        onClick={() => resetKeyHandler(dateType)}
        contentsColor={colors.Neutral_OnBackground}
      >
        <div className="flex items-center gap-1">
          <span>بازگشت به امروز</span>
          <ResetIcon />
        </div>
      </Button>
    </div>
  );
};

export default ResetBtn;
