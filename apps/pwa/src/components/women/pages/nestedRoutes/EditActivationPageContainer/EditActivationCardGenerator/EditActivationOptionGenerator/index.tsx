import TickIcon from '@assets/icons/selectedTick.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { EditActivationOptionGeneratorProps } from './types';

const EditActivationOptionGenerator = (props: EditActivationOptionGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      onClick={props.onClick}
      className="w-full flex items-start justify-end gap-2 py-3 border-t-[1px]"
      style={{ borderTopColor: props.isFirstIndex ? colors.Transparent : colors.Surface_SurfaceVariant }}
    >
      <Typography scale="Body" size="Small" color="Neutral_OnBackground">
        {props.title}
      </Typography>

      <div
        className="relative w-4 h-4 min-w-4 min-h-4 rounded-full border-[1px]"
        style={{ borderColor: props.isSelected ? colors.Transparent : colors.Surface_OutlineVariant }}
      >
        {props.isSelected && <TickIcon className="absolute top-0 left-0 right-0 bottom-0 scale-[1.4]" />}
      </div>
    </div>
  );
};

export default EditActivationOptionGenerator;
