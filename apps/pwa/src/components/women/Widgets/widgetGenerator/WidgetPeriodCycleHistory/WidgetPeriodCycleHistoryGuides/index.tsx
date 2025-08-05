import NeedToInvestigateIcon from '@assets/icons/needToInvestigate.svg';

import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const WidgetPeriodCycleHistoryGuides = () => {
  const { colors } = useTheme();

  const list = [
    {
      title: 'پریود',
      el: <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.PrimaryWoman_Primary }} />,
    },
    {
      title: 'روز عادی',
      el: <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.Surface_OutlineVariant }} />,
    },
    {
      title: 'روز تخمک‌گذاری',
      el: (
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.CalendarWoman_Fertility_Ovulation }} />
      ),
    },
    {
      title: 'دوره نیاز به بررسی',
      el: <NeedToInvestigateIcon className="w-5 h-auto" />,
    },
  ];

  return (
    <div className="w-full rounded-lg py-3 mt-3" style={{ backgroundColor: colors.Surface_SurfaceVariant }}>
      <CustomSlider gap={12} sidePadding={8}>
        {list.map((item, index) => (
          <div className="flex items-center gap-1 min-w-fit" key={index}>
            <Typography scale="Body" size="Small" color="Neutral_OnBackground">
              {item.title}
            </Typography>

            <>{item.el}</>
          </div>
        ))}
      </CustomSlider>
    </div>
  );
};

export default WidgetPeriodCycleHistoryGuides;
