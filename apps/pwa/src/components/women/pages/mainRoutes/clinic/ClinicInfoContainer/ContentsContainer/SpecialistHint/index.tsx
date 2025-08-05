import TickIcon from '@assets/icons/selectedTick.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

const SpecialistHint = () => {
  const { colors } = useTheme();

  return (
    <div
      className="flex flex-row-reverse items-center gap-2 w-full p-2 rounded-lg"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <TickIcon className="w-6 h-auto" />

      <Typography scale="Body" size="Small" color="Neutral_OnSurface">
        امکان ثبت نسخه با توجه به نوع بیمه و تشخیص پزشک
      </Typography>
    </div>
  );
};

export default SpecialistHint;
