import EmptyCells from './EmptyCells';
import SingleDay from './SingleDay';
import useMonthGeneratorDateTypeInfo from './__hooks__/useMonthGeneratorDateTypeInfo';
import { MonthGeneratorProps } from './types';

const MonthGenerator = ({ monthList, selectedDateHandler, selectedDate }: MonthGeneratorProps) => {
  const dateType = useMonthGeneratorDateTypeInfo();

  return (
    <div className="w-fit flex flex-col items-center mx-auto" style={{ direction: 'rtl' }}>
      <div className="w-fit grid grid-cols-7 justify-center gap-x-4 gap-y-3">
        <EmptyCells firstDayOfMonth={monthList[0]} dateType={dateType} />

        {monthList.map((day, index) => {
          return (
            <SingleDay
              isSelected={selectedDate === day[dateType]}
              selectedDateHandler={selectedDateHandler}
              dateType={dateType}
              key={index}
              day={day}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonthGenerator;
