import EyeIcon from '@assets/icons/eye.svg';
import { colorFormatConverter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { PragnencyBreastfeedingGeneratorProps } from './types';

const PragnencyBreastfeedingGenerator = (props: PragnencyBreastfeedingGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div className={`flex items-center gap-1 ${props.text.length >= 20 ? 'flex-col-reverse' : ''}`}>
      {props.showEyeIcon && (
        <EyeIcon className="w-6 h-auto" style={{ fill: colorFormatConverter(props.eyeIconColor) }} />
      )}

      {!props.showEyeIcon && (
        <Typography scale="Body" size="Medium">
          {props.text}
        </Typography>
      )}

      <Typography scale="Lable" size="Large">
        {props.name}
      </Typography>

      <CustomImage
        src={props.icon}
        width={32}
        className="rounded-full"
        style={{ backgroundColor: colors.Surface_SurfaceVariant }}
      />
    </div>
  );
};

export default PragnencyBreastfeedingGenerator;
