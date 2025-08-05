'use client';

import Button from '@components/ui/Button';
import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import useTheme from '@hooks/useTheme';

import useCalendarTypeSelect from './__hooks__/useCalendarTypeSelect';
import useCalendarTypeSubmit from './__hooks__/useCalendarTypeSubmit';
import { CHANGE_CALENDAR_TYPE_LIST } from './constants';

const CalendarTypePage = () => {
  const { colors } = useTheme();
  const { selectedType, selectedTypeHandler, isDisable } = useCalendarTypeSelect();

  const { submitHandler, isLoading } = useCalendarTypeSubmit(selectedType);

  return (
    <WomenPageLayout
      className="px-4"
      paddingBottom={24}
      rightElement="BackButton"
      backgroundColor={colors.Grey_50}
      rightElementScript="نوع نمایش تقویم"
    >
      <div className="w-full mt-5 p-4 rounded-lg" style={{ backgroundColor: colors.White, direction: 'rtl' }}>
        <Typography scale="Body" size="Small" color="Surface_InverseSurface" className="pb-4">
          نوع تقویم خود را انتخاب کنید
        </Typography>

        {CHANGE_CALENDAR_TYPE_LIST.map((item, index) => {
          const isSelected = item.value === selectedType;

          return (
            <div
              key={index}
              onClick={() => selectedTypeHandler(item.value)}
              className="w-full h-12 flex items-center gap-2 border-t-[1px]"
              style={{ borderTopColor: index > 0 ? colors.Neutral_Surface : colors.Transparent }}
            >
              <RadioButton isChecked={isSelected} />

              <Typography scale="Body" size="Medium" color="Neutral_OnSurface">
                {item.text}
              </Typography>
            </div>
          );
        })}
      </div>

      <Button
        size="medium"
        variant="fill"
        color="primary"
        isDisable={isDisable}
        isLoading={isLoading}
        onClick={submitHandler}
        className="!w-[204px] mx-auto mt-auto"
      >
        ویرایش
      </Button>
    </WomenPageLayout>
  );
};

export default CalendarTypePage;
