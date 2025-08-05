import { useMemo } from 'react';

import { toJalaliData } from '@utils/dates';

import Typography from '@components/ui/Typography';
import { CalendarTypeEnum } from '@constants/date.constants';
import useCulture from '@hooks/useCulture';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import TicketStatus from './TicketStatus';
import { TicketTextProps } from './type';

const TicketText = ({
  categoryName,
  statusColor,
  createTime,
  statusText,
  status,
  title,
  text,
  id,
}: TicketTextProps) => {
  const { culture } = useCulture();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const dateScript = useMemo(() => {
    switch (culture.calendarType) {
      case CalendarTypeEnum.Jalali:
        return toJalaliData(createTime);
      case CalendarTypeEnum.Gregorian:
        return createTime.slice(0, 10).replaceAll('-', '/');
      default:
        return toJalaliData(createTime);
    }
  }, [culture.calendarType, createTime]);

  return (
    <Link
      href={`/protected/supportTicket/${id}`}
      onClick={() => pageNavigationHandler({ showProgressBar: true, id: 'ticketDetail' })}
      className="bg-white flex flex-col items-end gap-3 p-4 w-full rounded-xl"
    >
      <div className="flex justify-between items-center w-full">
        <TicketStatus status={status} statusColor={statusColor} statusText={statusText} />

        <Typography scale="Lable" size="SmallProminet" color="Surface_OnSurfaceVariant">
          {title || categoryName}
        </Typography>
      </div>

      <Typography scale="Body" size="Small" color="Surface_Outline" textAlign="right">
        {text}
      </Typography>

      <Typography scale="Body" size="Small" color="Surface_Outline" className="w-full" textAlign="left">
        {dateScript}
      </Typography>
    </Link>
  );
};

export default TicketText;
