import SupportPhoneIcon from '@assets/icons/supportPhone.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { InfoSupportProps } from './types';

const InfoSupport = ({ support }: InfoSupportProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full px-2 py-4 rounded-xl flex flex-col items-center gap-2 border-[1px]"
      style={{ borderColor: colors.Neutral_Surface }}
    >
      <Typography scale="Lable" size="Medium">
        {support.title}
      </Typography>

      <div className="w-full h-[1px]" style={{ backgroundColor: colors.Neutral_Surface }} />

      <div className="w-full flex items-center justify-between pt-1">
        <div className="flex items-center gap-1">
          <SupportPhoneIcon className="w-4 h-auto" style={{ stroke: colors.PrimaryWoman_Primary }} />

          <Typography scale="Body" size="Medium">
            {support.phone}
          </Typography>
        </div>

        <Typography scale="Body" size="Medium">
          {support.helper}
        </Typography>
      </div>
    </div>
  );
};

export default InfoSupport;
