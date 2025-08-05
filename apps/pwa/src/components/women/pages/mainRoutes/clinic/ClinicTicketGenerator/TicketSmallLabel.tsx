import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ClinicStateEnums } from '../enumbs';
import TicketRate from './TicketRate';
import { TicketSmallLabelProps } from './types';

const TicketSmallLabel = ({ state, stylingTypes, rate }: TicketSmallLabelProps) => {
  const { colors } = useTheme();

  let backgroundColor = '';
  let freeColor = '';

  switch (stylingTypes) {
    case 'heading':
      backgroundColor = colors.Neutral_Background;
      freeColor = colors.Neutral_OnBackground;
      break;
    case 'lists':
      if (state === ClinicStateEnums.Rejected || state === ClinicStateEnums.rejectBySuppoer) {
        backgroundColor = colors.Error_ErrorContainer;
        freeColor = colors.Error_Error;
      } else {
        backgroundColor = colors.Pink_100;
        freeColor = colors.Neutral_OnBackground;
      }
      break;
    default:
      backgroundColor = colors.Pink_100;
      freeColor = colors.Neutral_OnBackground;
      break;
  }

  let script = '';

  switch (state) {
    case ClinicStateEnums.NoPay:
      script = 'در انتظار پرداخت';
      break;
    case ClinicStateEnums.Pending:
      script = 'در انتظار پاسخ پزشک';
      break;
    case ClinicStateEnums.NeedYourAnswer:
      script = 'در انتظار پاسخ کاربر';
      break;
    case ClinicStateEnums.Closed:
      script = 'بسته شده';
      break;
    case ClinicStateEnums.Rejected:
      script = 'تیکت رد شده است';
      break;
    case ClinicStateEnums.rejectBySuppoer:
      script = 'تیکت توسط پشتیبان رد شده است';
      break;
  }

  return (
    <div className="flex items-center justify-center rounded-full px-3 py-1" style={{ backgroundColor }}>
      <TicketRate rate={rate} />

      <Typography scale="Body" size="Small" color="FREE-STYLE" freeColor={freeColor}>
        {script}
      </Typography>
    </div>
  );
};

export default TicketSmallLabel;
