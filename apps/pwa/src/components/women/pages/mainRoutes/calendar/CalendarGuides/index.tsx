import { useEffect, useState } from 'react';

import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CalendarGuidesProps, GuideListTypes } from './types';

const CalendarGuides = ({ calendarGuideInfo }: CalendarGuidesProps) => {
  const { colors } = useTheme();
  const [guideList, setGuideList] = useState<GuideListTypes>([]);

  useEffect(() => {
    const list: GuideListTypes = [];

    if (calendarGuideInfo?.haveBreastfeeding) {
      list.push({ text: 'روزهای شیردهی', color: colors.CalendarWoman_Breastfeeding_Background1 });
    }
    if (calendarGuideInfo?.havePregnency) {
      list.push({ text: 'روز بارداری', color: colors.CalendarWoman_Pregnancy_Background1 });
    }

    list.push(
      { color: colors.Surface_SurfaceVariant, text: 'روزهای عادی' },
      { color: colors.CalendarWoman_PMS_Background, text: 'روزهای pms' },
      { color: colors.CalendarWoman_Period_Background, text: 'روزهای پریود' },
      { color: colors.Grey_200, text: 'روزهای تاخیر' },
      { color: colors.CalendarWoman_Fertility_Background, text: 'دوره باروری' },
      { color: colors.CalendarWoman_Fertility_Ovulation, text: 'روزهای تخمک‌گذاری' },
      { color: colors.Neutral_Background, text: 'روز انتخاب شده', borderColor: colors.Neutral_OnBackground },
    );

    setGuideList(list);
  }, [calendarGuideInfo]);

  return (
    <CustomSlider sidePadding={16} className="py-4 mb-4">
      {guideList.map((item, index) => (
        <div className="min-w-fit flex items-center gap-1" key={index}>
          <Typography scale="Body" size="Small">
            {item.text}
          </Typography>

          <div
            className="w-4 h-4 rounded-full border-[1px] border-dotted"
            style={{ backgroundColor: item.color, borderColor: item?.borderColor || 'transparent' }}
          />
        </div>
      ))}
    </CustomSlider>
  );
};

export default CalendarGuides;
