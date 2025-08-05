import { textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { RoutinDietsGeneratorProps } from './types';

const RoutinDietsGenerator = ({ item }: RoutinDietsGeneratorProps) => {
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    actionHandler(item.action);
  };

  return (
    <div className="w-full flex items-center justify-end gap-[10px] cursor-pointer" onClick={clickHandler}>
      <div className="flex flex-col items-end gap-1">
        <Typography scale="Lable" size="Medium">
          {item.title}
        </Typography>

        <Typography scale="Body" size="Small">
          {textShorter(item.subtitle, 40)}
        </Typography>
      </div>

      <div className="relative w-12 h-12 min-w-12 min-h-12 rounded-full">
        <div className="w-full h-full rounded-full overflow-hidden">
          <CustomImage src={item.image} />
        </div>
      </div>
    </div>
  );
};

export default RoutinDietsGenerator;
