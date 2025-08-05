import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { MemoryHeaderPropsType } from './type';

const MemoryHeader = ({ currentDate }: MemoryHeaderPropsType) => {
  const { colors } = useTheme();
  return (
    <div className="flex items-center justify-center gap-3">
      <div
        style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
        className="h-0 w-24"
      ></div>
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="center">
        {currentDate}
      </Typography>
      <div
        style={{ border: `1px solid ${colors.Neutral_Surface}`, transform: 'rotate(180deg)' }}
        className="h-0 w-24"
      ></div>
    </div>
  );
};

export default MemoryHeader;
