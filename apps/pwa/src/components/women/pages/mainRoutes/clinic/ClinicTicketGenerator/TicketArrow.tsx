import ArrowIcon from '@assets/icons/vector.svg';

import useTheme from '@hooks/useTheme';

import { TicketArrowProps } from './types';

const TicketArrow = ({ stylingTypes }: TicketArrowProps) => {
  const { colors } = useTheme();

  const color = stylingTypes === 'heading' ? colors.Neutral_Background : colors.Neutral_OnBackground;

  return (
    <div className="w-12 h-12 flex items-center justify-center">
      <ArrowIcon className="w-2 h-auto" style={{ stroke: color }} />
    </div>
  );
};

export default TicketArrow;
