import ExportIcon from '@assets/icons/Export.svg';

import Typography from '@components/ui/Typography';
import useShareNavigator from '@hooks/useShareNavigator';
import useTheme from '@hooks/useTheme';

import { ShareTextBtnPropsType } from './type';

const ShareTextBtn = ({ shareText }: ShareTextBtnPropsType) => {
  const { colors } = useTheme();
  const { handleShare } = useShareNavigator();

  return (
    <div
      className="flex justify-center"
      onClick={() => {
        handleShare(shareText || '');
      }}
    >
      <div
        style={{ backgroundColor: colors.PrimaryWoman_PrimaryContainer }}
        className="flex items-center gap-2 px-8 py-1 rounded-full border-[1px] select-none cursor-pointer w-full h-[48px]"
      >
        <Typography scale="Body" size="Large" color="PrimaryWoman_Primary">
          ارسال کد برای همدل
        </Typography>
        <ExportIcon className="w-6 h-6" style={{ stroke: colors.PrimaryWoman_Primary }} />
      </div>
    </div>
  );
};

export default ShareTextBtn;
