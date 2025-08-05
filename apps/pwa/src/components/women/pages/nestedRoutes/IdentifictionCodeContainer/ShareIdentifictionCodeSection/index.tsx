import ExportIcon from '@assets/icons/Export.svg';

import Typography from '@components/ui/Typography';
import useShareNavigator from '@hooks/useShareNavigator';
import useTheme from '@hooks/useTheme';

import { ShareIdentifictionCodeSectionPropsType } from './type';

const ShareIdentifictionCodeSection = ({ interfaceShareText }: ShareIdentifictionCodeSectionPropsType) => {
  const { handleShare } = useShareNavigator();
  const { colors } = useTheme();

  return (
    <div
      className="flex justify-center"
      onClick={() => {
        handleShare(interfaceShareText);
      }}
    >
      <div
        style={{ backgroundColor: colors.PrimaryWoman_Primary, color: colors.White }}
        className="flex items-center gap-2 px-8 py-2 rounded-full border-[1px] select-none cursor-pointer w-full h-[48px]"
      >
        <Typography scale="Body" size="Large" color="White">
          اشتراک گذاری
        </Typography>
        <ExportIcon className="w-6 h-6" style={{ stroke: 'white' }} />
      </div>
    </div>
  );
};

export default ShareIdentifictionCodeSection;
