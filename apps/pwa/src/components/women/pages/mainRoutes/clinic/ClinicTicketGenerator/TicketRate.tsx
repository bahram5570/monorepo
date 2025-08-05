import StarIcon from '@assets/icons/star.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { TicketRateProps } from './types';

const TicketRate = ({ rate }: TicketRateProps) => {
  const { colors } = useTheme();

  return (
    <>
      {rate > 0 && (
        <div className="flex items-center gap-1 pr-1">
          <Typography scale="Lable" size="Large" className="!h-5">
            {rate.toString()}
          </Typography>

          <StarIcon className="w-6 h-auto" style={{ fill: colors.Yellow }} />

          <div className="w-[1px] h-[20px]" style={{ backgroundColor: colors.Pink_200 }} />
        </div>
      )}
    </>
  );
};

export default TicketRate;
