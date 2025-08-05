import { useEffect, useState } from 'react';

import { NEED_DATE_PATH_LIST } from '@providers/DateInSignProvider/constants';
import { usePathname } from 'next/navigation';

const useInitailSelectedDate = () => {
  const [calendarInitailSelectedDate, setCalendarInitailSelectedDate] = useState<string | null>(null);
  const pathname = usePathname();

  const changeCurrentDate = (date: string) => {
    setCalendarInitailSelectedDate(date);
  };

  useEffect(() => {
    const isNeedDatePath = NEED_DATE_PATH_LIST.some((item) => pathname.includes(item));

    if (!isNeedDatePath) setCalendarInitailSelectedDate('');
  }, [pathname]);

  return { calendarInitailSelectedDate, changeCurrentDate };
};

export default useInitailSelectedDate;
