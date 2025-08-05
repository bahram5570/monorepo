import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RatingTabGeneratorProps } from './types';

const RatingTabGenerator = ({ tabType, tabHandler, tab }: RatingTabGeneratorProps) => {
  const { colors } = useTheme();

  const script = tabType === 'positive' ? 'بازخورد مثبت' : 'بازخورد منفی';
  const color = tabType === 'positive' ? colors.Success_Success : colors.Error_Error;

  return (
    <div
      onClick={() => tabHandler(tabType)}
      style={{ borderBottomColor: tab === tabType ? color : colors.Surface_OutlineVariant }}
      className="w-full flex justify-center items-center p-2 border-[1px] border-transparent  cursor-pointer"
    >
      <Typography scale="Body" size="Medium">
        {script}
      </Typography>
    </div>
  );
};

export default RatingTabGenerator;
