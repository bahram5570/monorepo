import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/vector.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { GOALS_LIST, GOAL_SELECTOR_HEIGHT, GOAL_SELECTOR_WIDTH } from './constants';
import { GoalSelectorProps, SelectHandlerTypes } from './types';

const GoalSelector = ({ selectedGoalTitle, payloadHandler }: GoalSelectorProps) => {
  const { colors } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectHandler: SelectHandlerTypes = (v) => {
    payloadHandler(v);
    setIsOpen(false);
  };

  useEffect(() => {
    // # Closes the dropdown by clicking anywhere outside the parent component
    const parentElement = ref.current;

    const clickHandler = (event: MouseEvent) => {
      const documentElement = event.target as Node | null;

      if (parentElement && documentElement) {
        if (!parentElement.contains(documentElement)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div className="relative ml-auto" ref={ref}>
      <div
        className="px-4 rounded-full flex items-center justify-between cursor-pointer select-none"
        style={{ width: GOAL_SELECTOR_WIDTH + 10, height: GOAL_SELECTOR_HEIGHT, backgroundColor: colors.White }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowIcon
          style={{ stroke: colors.Surface_OnSurfaceVariant, transform: isOpen ? 'rotate(90deg)' : 'rotate(-90deg)' }}
          className="w-2 h-auto"
        />

        <Typography scale="Lable" size="MediumProminet" color="Surface_OnSurfaceVariant">
          {selectedGoalTitle}
        </Typography>
      </div>

      {isOpen && (
        <div
          className="absolute left-0 right-0 top-8 flex flex-col rounded-xl overflow-hidden z-10"
          style={{ backgroundColor: colors.White, width: GOAL_SELECTOR_WIDTH }}
        >
          {GOALS_LIST.map((item, index) => (
            <div
              className="w-full px-4 py-1 select-none cursor-pointer hover:bg-slate-100"
              onClick={() => selectHandler(item.value)}
              key={index}
            >
              <Typography scale="Body" size="Medium" className="ml-auto">
                {item.title}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalSelector;
