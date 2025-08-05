import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';

import { PageIconsProps } from './types';

const PageIcons = ({ Icon, title, isSelected, url }: PageIconsProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();
  const { colors } = useTheme();

  const navigateHandler = () => {
    pageNavigationHandler({ showProgressBar: true, id: 'PageIcons', linkTo: url });
  };

  return (
    <div className="flex flex-col items-center cursor-pointer" onClick={navigateHandler}>
      <Icon
        className="w-7 h-auto"
        style={{ stroke: isSelected ? colors.Neutral_OnBackground : colors.Surface_Outline }}
      />

      <Typography
        scale="Body"
        size="Small"
        className=""
        color={isSelected ? 'Neutral_OnBackground' : 'Surface_Outline'}
      >
        {title}
      </Typography>
    </div>
  );
};

export default PageIcons;
