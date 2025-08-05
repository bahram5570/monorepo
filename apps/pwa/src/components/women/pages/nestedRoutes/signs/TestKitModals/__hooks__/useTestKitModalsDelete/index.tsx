import { OpenDeleteModalHandlerTypes } from '@components/women/KitTests/TestKitModalsLists/__hooks__/useTestKitsDeleteModal/types';
import { KitTestModuleTypeEnums } from '@components/women/KitTests/enum';
import { CalendarWidgetEnums } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/CalendarEnums';
import { InfoCalendarResponseTypes } from '@components/women/pages/mainRoutes/calendar/__hooks__/useCalendarGetData/types';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

const useTestKitModalsDelete = () => {
  const { getQuery, updateQuery } = useCustomReactQuery();

  const deleteHandler: OpenDeleteModalHandlerTypes = (v) => {
    const data = getQuery<InfoCalendarResponseTypes>({ queryKey: ['signsInfoCalendar'] });

    if (data) {
      const date = v.createTime.slice(0, 10);
      const items = data.days[date].items;
      const item = items.find((item) => item.type === CalendarWidgetEnums.Sign);

      if (item) {
        if (v.moduleType === KitTestModuleTypeEnums.Ovulation) {
          item.data.ovulationResult = null;
        }

        if (v.moduleType === KitTestModuleTypeEnums.BabyCheck) {
          item.data.babyChecks = item.data.babyChecks.filter((_, index) => index !== v.index);
        }

        updateQuery({ queryKey: ['signsInfoCalendar'], payload: data });
      }
    }
  };

  return { deleteHandler };
};

export default useTestKitModalsDelete;
