import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';
import m from 'moment-jalaali';

import SelectDateIcon from '@assets/icons/selectDate.svg';
import CustomButton from '@components/ui/CustomButton';
import CustomModal from '@components/ui/CustomModal';
import CustomTypography from '@components/ui/CustomTypography';
import DateSelector from '@components/ui/DateSelector';
import { currentDate } from '@utils/dates';

import DaysModule from '../../DaysModule';
import { PREGNANCY_WEEKS_TOTAL_DAYS } from '../constants';
import useValues from './__hooks__/useValues';
import { DateModuleTypes } from './types';

const { gDate, jDate } = currentDate();
const mo = m(gDate, 'YYYY-MM-DD');
mo.subtract(PREGNANCY_WEEKS_TOTAL_DAYS - 1, 'days');
const startDate = mo.format('jYYYY/jMM/jDD') as `${string}/${string}/${string}`;

const DateModule = ({ submitHandler, isLoading }: DateModuleTypes) => {
  const { breakPoint } = useBreakPoint();
  const { isOpen, isOpenHandler, currentDate, currentDateHandler, values, valuesHandler } = useValues();

  const position = breakPoint.mobile ? 'bottom' : 'center';
  const defaultDate = (currentDate || jDate) as `${string}/${string}/${string}`;
  const isDisable = !values.cycleLength || !values.lastPeriod || !values.periodLength;

  return (
    <>
      <div className="w-full h-full flex flex-col gap-2">
        <div
          onClick={() => isOpenHandler(true)}
          style={{ backgroundColor: COLORS_LIST.White }}
          className="w-full flex justify-between rounded-2xl p-4 mt-11 cursor-pointer"
        >
          {values.lastPeriod ? (
            <CustomTypography fontSize="Body_Large">{values.lastPeriod}</CustomTypography>
          ) : (
            <CustomTypography fontSize="Body_Large" color={'Surface_Outline'}>
              تاریخ آخرین پریود
            </CustomTypography>
          )}

          <SelectDateIcon className="w-6 h-auto" style={{ stroke: COLORS_LIST.Surface_Outline }} />
        </div>

        <DaysModule
          minValue={3}
          defaultValue={28}
          placeholder="طول دوره"
          value={values.cycleLength}
          valueHandler={(v) => valuesHandler({ name: 'cycleLength', value: v })}
        />

        <DaysModule
          minValue={2}
          defaultValue={7}
          placeholder="طول پریود"
          value={values.periodLength}
          valueHandler={(v) => valuesHandler({ name: 'periodLength', value: v })}
        />

        <CustomButton
          varient="fill"
          isLoading={isLoading}
          onClick={() => submitHandler(values)}
          style={{ pointerEvents: isDisable ? 'none' : 'auto' }}
          className="absolute h-[48px] w-full !mt-auto sm:max-w-[460px]"
        >
          محاسبه دوره پریود
        </CustomButton>
      </div>

      <CustomModal position={position} isOpen={isOpen} onClose={() => isOpenHandler(false)}>
        <div
          className="w-[100vw] max-w-[460px] flex flex-col items-center p-6 md:p-10 md:rounded-2xl"
          style={{ backgroundColor: COLORS_LIST.White }}
        >
          <CustomTypography className="text-center">کاربر عزیز برای محاسبه روز شروع پریود</CustomTypography>

          <CustomTypography fontSize="Lable_Large" className="text-center mt-2">
            تاریخ آخرین باری که پریود شدی رو بهمون بگو
          </CustomTypography>

          <DateSelector valueHandler={(v) => currentDateHandler(v)} startDate={startDate} defaultDate={defaultDate} />

          <CustomButton
            varient="fill"
            className="!w-full !mt-2"
            onClick={() => valuesHandler({ name: 'lastPeriod', value: currentDate })}
          >
            انتخاب تاریخ
          </CustomButton>
        </div>
      </CustomModal>
    </>
  );
};

export default DateModule;
