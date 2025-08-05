import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';
import m from 'moment-jalaali';

import SelectDateIcon from '@assets/icons/selectDate.svg';
import CustomButton from '@components/ui/CustomButton';
import CustomModal from '@components/ui/CustomModal';
import CustomTypography from '@components/ui/CustomTypography';
import DateSelector from '@components/ui/DateSelector';
import { currentDate } from '@utils/dates';

import { PREGNANCY_WEEKS_TOTAL_DAYS } from '../constants';
import useSelectedDate from './__hooks__/useSelectedDate';
import { DateModuleTypes } from './types';

const { gDate, jDate } = currentDate();
const mo = m(gDate, 'YYYY-MM-DD');
mo.subtract(PREGNANCY_WEEKS_TOTAL_DAYS - 1, 'days');
const startDate = mo.format('jYYYY/jMM/jDD') as `${string}/${string}/${string}`;

const DateModule = ({ submitHandler, isLoading }: DateModuleTypes) => {
  const { breakPoint } = useBreakPoint();
  const { isOpen, isOpenHandler, currentDate, currentDateHandler, selectedDate, selectedDateHandler } =
    useSelectedDate();

  const position = breakPoint.mobile ? 'bottom' : 'center';
  const defaultDate = (currentDate || jDate) as `${string}/${string}/${string}`;

  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <CustomTypography fontSize="Body_Large" className="text-center">
          تاریخ آخرین پریودت رو بهمون بگو تا بهت سن بارداریت رو بگیم!
        </CustomTypography>

        <div
          onClick={() => isOpenHandler(true)}
          style={{ backgroundColor: COLORS_LIST.White }}
          className="w-full sm:max-w-[460px] flex justify-between rounded-2xl p-4 mt-6 cursor-pointer"
        >
          {selectedDate ? (
            <CustomTypography fontSize="Body_Large">{selectedDate}</CustomTypography>
          ) : (
            <CustomTypography fontSize="Body_Large" color={'Surface_Outline'}>
              تاریخ آخرین پریود
            </CustomTypography>
          )}

          <SelectDateIcon className="w-6 h-auto" style={{ stroke: COLORS_LIST.Surface_Outline }} />
        </div>

        <CustomButton
          varient="fill"
          isLoading={isLoading}
          onClick={() => submitHandler(selectedDate)}
          style={{ pointerEvents: !selectedDate ? 'none' : 'auto' }}
          className="absolute h-[48px] w-full !mt-auto sm:max-w-[460px]"
        >
          محاسبه سن بارداری
        </CustomButton>
      </div>

      <CustomModal position={position} isOpen={isOpen} onClose={() => isOpenHandler(false)}>
        <div
          className="w-[100vw] max-w-[460px] flex flex-col items-center p-6 md:p-10 md:rounded-2xl"
          style={{ backgroundColor: COLORS_LIST.White }}
        >
          <CustomTypography className="text-center">
            کاربر عزیز برای محاسبه اینکه توی هفته چندم بارداری هستی
          </CustomTypography>

          <CustomTypography fontSize="Lable_Large" className="text-center mt-2">
            تاریخ آخرین باری که پریود شدی رو بهمون بگو
          </CustomTypography>

          <DateSelector valueHandler={(v) => currentDateHandler(v)} startDate={startDate} defaultDate={defaultDate} />

          <CustomButton varient="fill" onClick={selectedDateHandler} className="!w-full !mt-2">
            انتخاب تاریخ
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};

export default DateModule;
