import { colorFormatConverter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import WidgetScaleModule from '@components/women/Widgets/WidgetScaleModule';

import { CycleScriptsProps } from './types';

const CycleScripts = ({ description, leading, textColor, title, height }: CycleScriptsProps) => {
  const color = colorFormatConverter(textColor);

  return (
    <WidgetScaleModule>
      <div className="flex flex-col justify-end items-center gap-3 px-4" style={{ height }}>
        <Typography scale="Title" size="Small" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {leading}
        </Typography>

        <Typography scale="Headline" size="Large" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {title}
        </Typography>

        <Typography scale="Title" size="Small" textAlign="center" color="FREE-STYLE" freeColor={color}>
          {description}
        </Typography>
      </div>
    </WidgetScaleModule>
  );
};

export default CycleScripts;
