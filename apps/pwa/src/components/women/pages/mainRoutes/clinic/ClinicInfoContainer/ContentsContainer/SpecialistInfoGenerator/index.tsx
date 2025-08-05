import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SpecialistInfoGeneratorProps } from './types';

const SpecialistInfoGenerator = ({
  backgroundColor,
  nezamNumber,
  speciliaty,
  firstName,
  lastName,
  isOnline,
  image,
}: SpecialistInfoGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-row-reverse items-center gap-1 w-full p-2 rounded-xl mt-2" style={{ backgroundColor }}>
      <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
        <CustomImage src={image} width={48} height={48} className="rounded-full" />

        {isOnline && (
          <div
            className="absolute right-0 bottom-0 w-[14px] h-[14px] p-[2px] rounded-full z-10"
            style={{ backgroundColor: colors.White }}
          >
            <div className="w-full h-full rounded-full" style={{ backgroundColor: colors.Green_500 }} />
          </div>
        )}
      </div>

      <div className="flex flex-col items-end gap-1">
        <Typography scale="Lable" size="Medium">{`${firstName} ${lastName}`}</Typography>

        <div className="flex items-center gap-2">
          <Typography scale="Lable" size="Small" color="Surface_InverseSurface">
            {`ش.ن: ${nezamNumber}`}
          </Typography>

          <div className="w-[1px] h-4" style={{ backgroundColor: colors.Surface_OutlineVariant }} />

          <Typography scale="Lable" size="Small" color="Surface_InverseSurface">
            {speciliaty}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default SpecialistInfoGenerator;
