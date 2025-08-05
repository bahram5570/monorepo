import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { TicketDoctorProps } from './types';

const TicketDoctor = ({ drName, drSpeciality, drImage, stylingTypes }: TicketDoctorProps) => {
  const { colors } = useTheme();

  const color = stylingTypes === 'heading' ? colors.Neutral_Background : colors.Neutral_OnBackground;

  return (
    <div className="flex items-center gap-1">
      <div className="flex flex-col items-end gap-1">
        <Typography scale="Lable" size="Medium" color="FREE-STYLE" freeColor={color}>
          {drName}
        </Typography>

        <Typography scale="Body" size="Small" color="FREE-STYLE" freeColor={color}>
          {drSpeciality}
        </Typography>
      </div>

      <CustomImage src={drImage} width={56} height={56} className="rounded-full" />
    </div>
  );
};

export default TicketDoctor;
