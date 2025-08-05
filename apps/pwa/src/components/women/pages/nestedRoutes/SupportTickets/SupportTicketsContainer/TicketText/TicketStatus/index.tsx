import { colorFormatConverter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { TicketStatusPropsType } from './type';

const TicketStatus = ({ statusColor, statusText }: TicketStatusPropsType) => {
  const { colors } = useTheme();

  const changeColorHandler = () => {
    if (statusText === 'در انتظار پاسخ پشتیبان') {
      return colors.Warning_WarininContainer;
    }
    if (statusText === 'نیاز به پاسخ دهی شما') {
      return colors.Success_SuccessContainer;
    }

    if (statusText === 'تیکت بسته شده') {
      return colors.Error_ErrorContainer;
    }
  };

  return (
    <div style={{ backgroundColor: changeColorHandler() }} className="px-2 py-1 rounded-full">
      <Typography scale="Lable" size="SmallProminet" color="FREE-STYLE" freeColor={colorFormatConverter(statusColor)}>
        {statusText}
      </Typography>
    </div>
  );
};

export default TicketStatus;
