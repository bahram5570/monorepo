import BlueTickIcon from '@assets/icons/blueTick2.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetHintCardWriterInfoProps } from './types';

const WidgetHintCardWriterInfo = ({ writerSpeciality, writerName, writerIcon }: WidgetHintCardWriterInfoProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex items-center gap-2" dir="rtl">
      <div className="relative w-11 h-11">
        <CustomImage
          width={44}
          height={44}
          src={writerIcon}
          objectFit="contain"
          // className="rounded-full border-[1px]"
          // style={{ borderColor: colors.PrimaryWoman_Primary }}
        />

        {/* <BlueTickIcon className="absolute bottom-0 -left-1 w-5 h-auto z-10" /> */}
      </div>

      <div className="flex flex-col">
        <Typography scale="Body" size="Small" color="Surface_Outline">
          {writerSpeciality}
        </Typography>

        <Typography scale="Lable" size="Medium" color="Neutral_OnBackground">
          {writerName}
        </Typography>
      </div>
    </div>
  );
};

export default WidgetHintCardWriterInfo;
