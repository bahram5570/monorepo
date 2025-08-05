import CopyIcon from '@assets/icons/Copy.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CopyIdentifictionCodeSectionPropsType } from './type';

const CopyIdentifictionCodeSection = ({ interfaceCode, copyToClipboard }: CopyIdentifictionCodeSectionPropsType) => {
  const { colors } = useTheme();

  return (
    <div className="flex justify-center">
      <div
        style={{ borderColor: colors.White, backgroundColor: colors.White }}
        className="flex items-center gap-2 px-9 py-2 rounded-full border-[1px] select-none cursor-pointer w-full h-[48px]"
        onClick={() => {
          copyToClipboard(String(interfaceCode));
        }}
      >
        <Typography scale="Title" size="Medium" color="Neutral_OnBackground">
          {interfaceCode}
        </Typography>
        <CopyIcon className="w-8 h-8" style={{ stroke: colors.Surface_Outline }} />
      </div>
    </div>
  );
};

export default CopyIdentifictionCodeSection;
