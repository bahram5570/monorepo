import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, selectedHandler }: PageIconsProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={selectedHandler}>
      <Icon
        className="w-7 h-auto"
        style={{ stroke: isSelected ? colors.Neutral_OnBackground : colors.Surface_Outline }}
      />

      <Typography
        scale="Body"
        size="Small"
        className="select-none"
        color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PageIcons;
