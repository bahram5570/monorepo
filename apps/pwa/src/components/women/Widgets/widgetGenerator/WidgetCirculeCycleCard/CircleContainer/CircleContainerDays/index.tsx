import { circleContainerRotateFinder } from '../__utils__';

import styles from '../styles.module.css';

import useTheme from '@hooks/useTheme';

import { CIRCLE_EXTRA_SIZE } from '../constants';
import CurrentDayGenerator from './CurrentDayGenerator';
import DayGenerator from './DayGenerator';
import OvulationGenerator from './OvulationGenerator';
import { CircleContainerDaysProps } from './types';

const CircleContainerDays = (props: CircleContainerDaysProps) => {
  const { colors } = useTheme();

  const rotate = `${circleContainerRotateFinder(0)}deg`;

  const normalCurrentDayColor = colors.Yellow_500;
  const periodColor = colors.PrimaryWoman_Primary;
  const pmsColor = colors.CycleWoman_Pms_Eyebrow;
  const fertilityColor = colors.Cyan_500;

  let currentDayColor = normalCurrentDayColor;
  if (props.currentDay >= props.periodStart && props.currentDay <= props.periodEnd) {
    currentDayColor = periodColor;
  } else if (props.hasFertility && props.currentDay >= props.fertilityStart && props.currentDay <= props.fertilityEnd) {
    currentDayColor = fertilityColor;
  } else if (props.hasPms && props.currentDay >= props.pmsStart && props.currentDay <= props.pmsEnd) {
    currentDayColor = pmsColor;
  }

  return (
    <div
      className={`absolute pointer-events-none ${styles.container}`}
      style={{
        top: -CIRCLE_EXTRA_SIZE * 2,
        left: -CIRCLE_EXTRA_SIZE * 2,
        right: -CIRCLE_EXTRA_SIZE * 2,
        bottom: -CIRCLE_EXTRA_SIZE * 2,
      }}
    >
      <div className="relative w-full h-full rounded-full" style={{ rotate }}>
        {/* // # Current day */}
        <CurrentDayGenerator color={currentDayColor} cycleLength={props.cycleLength} currentDay={props.currentDay} />

        {/* // # Ovulation day */}
        {props.hasOvulation && (
          <OvulationGenerator
            ovulationDay={props.ovulationDay}
            cycleLength={props.cycleLength}
            currentDay={props.currentDay}
            color={fertilityColor}
          />
        )}

        {/* // # Period */}
        <DayGenerator
          cycleLength={props.cycleLength}
          currentDay={props.currentDay}
          day={props.periodStart}
          color={periodColor}
        />

        <DayGenerator
          cycleLength={props.cycleLength}
          currentDay={props.currentDay}
          day={props.periodEnd}
          color={periodColor}
        />

        {/* // # Fertility */}
        {props.hasFertility && (
          <>
            <DayGenerator
              ovulationDay={props.hasOvulation ? props.ovulationDay : undefined}
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.fertilityStart}
              color={fertilityColor}
            />

            <DayGenerator
              ovulationDay={props.hasOvulation ? props.ovulationDay : undefined}
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.fertilityEnd}
              color={fertilityColor}
            />
          </>
        )}

        {/* // # PMS */}
        {props.hasPms && props.cycleLength !== props.currentDay && props.pmsEnd > props.currentDay && (
          <>
            <DayGenerator
              cycleLength={props.cycleLength}
              currentDay={props.currentDay}
              day={props.pmsEnd}
              color={pmsColor}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default CircleContainerDays;
