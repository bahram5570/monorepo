import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useTestGeneratorScriptMaker from './__hooks__/useTestGeneratorScriptMaker';
import { TestGeneratorProps } from './types';

const TestGenerator = (props: TestGeneratorProps) => {
  const { colors } = useTheme();
  const scripts = useTestGeneratorScriptMaker(props);

  return (
    <div
      className="w-full h-[56px] flex items-center justify-between px-4 rounded-lg"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        {scripts.dateScript}
      </Typography>

      <div className="flex items-center gap-2">
        <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
          {scripts.resultScript}
        </Typography>

        <div className="w-[1px] h-[24px]" style={{ backgroundColor: colors.Neutral_Surface }} />

        <Typography scale="Body" size="Medium" color="Neutral_OnBackground" textAlign="center" className="w-[52px]">
          {scripts.typeScript}
        </Typography>
      </div>
    </div>
  );
};

export default TestGenerator;
