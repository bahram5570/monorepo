import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const WidgetPeriodReportCardGuides = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full pt-1">
      <CustomSlider className="items-baseline">
        <Typography scale="Lable" size="SmallProminet" color="Neutral_OnBackground">
          راهنما:
        </Typography>

        <div className="flex items-center gap-1 min-w-fit">
          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            طول پریود هر دوره
          </Typography>

          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.PrimaryWoman_Primary }} />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            طول سیکل هر دوره
          </Typography>

          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            طول دوره ثبت‌شده
          </Typography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md" style={{ backgroundColor: colors.Pink_200 }} />
            <div className="w-3 h-1 rounded-md" style={{ backgroundColor: colors.Pink_200 }} />
          </div>
        </div>

        <div className="flex items-center gap-1 min-w-fit">
          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            طول پریود ثبت‌شده
          </Typography>

          <div className="flex gap-1">
            <div className="w-3 h-1 rounded-md" style={{ backgroundColor: colors.Pink_400 }} />
            <div className="w-3 h-1 rounded-md" style={{ backgroundColor: colors.Pink_400 }} />
          </div>
        </div>
      </CustomSlider>
    </div>
  );
};

export default WidgetPeriodReportCardGuides;
