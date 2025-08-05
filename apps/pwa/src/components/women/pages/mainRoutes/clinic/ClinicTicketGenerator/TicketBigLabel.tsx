import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ClinicStateEnums } from '../enumbs';
import { TicketBigLabelProps } from './types';

const TicketBigLabel = ({ state, stylingTypes }: TicketBigLabelProps) => {
  const { colors } = useTheme();

  let script = '';

  switch (state) {
    case ClinicStateEnums.NeedYourAnswer:
      script = 'نیاز به پاسخ دهی شما';
      break;
    case ClinicStateEnums.Closed:
      script = 'امتیاز به متخصص';
      break;
  }
  return (
    <div
      className="w-full h-10 rounded-lg flex items-center justify-center"
      style={{
        backgroundColor: stylingTypes === 'heading' ? colors.PrimaryWoman_OnPrimary : colors.PrimaryWoman_Primary,
      }}
    >
      <Typography
        scale="Lable"
        size="Large"
        color={stylingTypes === 'heading' ? 'PrimaryWoman_Primary' : 'PrimaryWoman_OnPrimary'}
      >
        {script}
      </Typography>
    </div>
  );
};

export default TicketBigLabel;
