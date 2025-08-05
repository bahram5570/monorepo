import ArrowIcon from '@assets/icons/calendarArrow.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { PregnancySettingsLinkGeneratorProps } from './types';

const PregnancySettingsLinkGenerator = ({
  selectHandler,
  description,
  phaseType,
  title,
}: PregnancySettingsLinkGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full rounded-xl flex items-center justify-between p-4 cursor-pointer"
      style={{ backgroundColor: colors.White }}
      onClick={() => selectHandler(phaseType)}
    >
      <ArrowIcon className="w-4 h-auto" style={{ stroke: colors.Surface_Outline }} />

      <div className="flex flex-col gap-1" dir="rtl">
        <Typography scale="Lable" size="MediumProminet" color="PrimaryWoman_Primary">
          {title}
        </Typography>

        <Typography scale="Body" size="Small" color="Surface_Outline">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default PregnancySettingsLinkGenerator;
