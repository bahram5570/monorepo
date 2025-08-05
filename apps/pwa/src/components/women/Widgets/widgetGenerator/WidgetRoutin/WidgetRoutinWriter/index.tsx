import BlueTick from '@assets/icons/blueTick2.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetRoutinWriterProps } from './types';

const WidgetRoutinWriter = ({ writerName, writerSpeciality, writerIcon }: WidgetRoutinWriterProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex items-center justify-end gap-[10px]">
      <div className="flex flex-col items-end">
        <Typography scale="Lable" size="Medium">
          {writerName}
        </Typography>

        <Typography scale="Body" size="Small" color="Surface_Outline">
          {writerSpeciality}
        </Typography>
      </div>

      <div
        className="relative w-10 h-10 min-w-10 min-h-10 rounded-full"
        // style={{ borderColor: colors.PrimaryWoman_Primary }}
      >
        {/* <div className="w-full h-full rounded-full overflow-hidden"> */}
        <CustomImage src={writerIcon} />
        {/* </div> */}
        {/* <BlueTick className="absolute -left-1 -bottom-1 w-5 h-auto" /> */}
      </div>
    </div>
  );
};

export default WidgetRoutinWriter;
