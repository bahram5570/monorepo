import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ClinicWidgetGeneratorProps } from './types';

const ClinicWidgetGenerator = ({
  doctorImage,
  subtitle,
  tailing,
  action,
  title,
  image,
}: ClinicWidgetGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      // onClick={action}
      className="relative flex flex-col justify-center items-end h-14 rounded-xl py-4 pr-16 w-[calc(100%_-_16px)]"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <CustomImage
        src={image}
        width={72}
        objectFit="cover"
        style={{ borderColor: colors.Neutral_Background }}
        className="absolute -right-[20px] bottom-0 rounded-full border-[1px]"
      />
      <CustomImage
        src={doctorImage}
        width={36}
        objectFit="cover"
        style={{ borderColor: colors.Neutral_Background }}
        className="absolute right-[20px] bottom-0 rounded-full border-[1px] z-10"
      />

      <Typography scale="Lable" size="Large">
        {title}
      </Typography>

      <div className="flex items-baseline gap-1 ">
        <Typography scale="Lable" size="Small">
          {textShorter(tailing, 20)}
        </Typography>

        <Typography scale="Lable" size="Medium">
          {subtitle}
        </Typography>
      </div>
    </div>
  );
};

export default ClinicWidgetGenerator;
