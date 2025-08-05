import ArrowIcon from '@assets/icons/calendarArrow.svg';

import { ArrowGeneratorProps } from './types';

const ArrowGenerator = ({ isNextArrow, onClick }: ArrowGeneratorProps) => {
  const style = isNextArrow ? { top: -75, right: 20, transform: 'scale(-1)' } : { top: -75, left: 20 };

  return (
    <div className="absolute z-10" style={style} onClick={onClick}>
      <ArrowIcon style={{ stroke: '#1C1B1E' }} className="w-6 h-6" />
    </div>
  );
};

export default ArrowGenerator;
