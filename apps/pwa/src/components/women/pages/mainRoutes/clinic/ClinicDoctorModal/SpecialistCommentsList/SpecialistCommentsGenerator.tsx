import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { SpecialistCommentsGeneratorProps } from './types';

const SpecialistCommentsGenerator = ({ isPositive, scripts }: SpecialistCommentsGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col gap-2 pt-1">
      {scripts.map((item, index) => (
        <div className="flex flex-row-reverse items-center gap-2" key={index}>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: isPositive ? colors.Green_500 : colors.Red_500 }}
          />

          <Typography scale="Body" size="Small">
            {item}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default SpecialistCommentsGenerator;
