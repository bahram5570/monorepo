import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

const LoadingProgressBar = () => {
  const { colors } = useTheme();

  return (
    <div className="fixed top-3 left-0 right-0 mx-auto overflow-hidden z-[80]" style={{ maxWidth: MAX_SCREEN_WIDTH }}>
      <div className="w-full h-[14px] p-[3px] flex items-center rounded-full bg-[#ffffff] animate-pageNavigation">
        <div className="w-full h-full rounded-full" style={{ backgroundColor: colors.PrimaryWoman_Primary }} />
      </div>
    </div>
  );
};

export default LoadingProgressBar;
