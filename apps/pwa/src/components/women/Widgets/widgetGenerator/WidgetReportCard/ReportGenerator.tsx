import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ReportGeneratorProps } from './types';

const ReportGenerator = ({ icon, text, title, trailing, backgroundColor }: ReportGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-10 flex items-center rounded-lg justify-between px-4"
      style={{ backgroundColor: colorFormatConverter(backgroundColor) }}
    >
      <Typography scale="Lable" size="Medium">
        {trailing}
      </Typography>

      <div className="flex items-center gap-2 h-full">
        <Typography scale="Lable" size="Medium">
          {text}
        </Typography>

        <div className="h-5 w-[1px] block" style={{ backgroundColor: colors.Surface_Outline }} />

        <Typography scale="Lable" size="Medium">
          {title}
        </Typography>

        <CustomImage src={icon} width={20} height={20} />
      </div>
    </div>
  );
};

export default ReportGenerator;
