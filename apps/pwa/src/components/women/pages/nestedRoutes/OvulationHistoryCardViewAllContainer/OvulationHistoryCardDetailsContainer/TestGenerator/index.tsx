import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useScriptMaker from './__hooks__/useScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const { colors } = useTheme();
  const { dateScript, resultScript } = useScriptMaker(props);

  return (
    <div
      className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        {dateScript}
      </Typography>

      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        {resultScript}
      </Typography>
    </div>
  );
};

export default TestGenerator;
