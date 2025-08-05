import CustomImage from '@components/ui/CustomImage';
import useWidgetActions from '@hooks/useWidgetActions';

import { WidgetMediaProps } from './types';

const WidgetMedia = ({ data }: WidgetMediaProps) => {
  const { actionHandler } = useWidgetActions();

  const clickHandler = () => {
    actionHandler(data.action);
  };

  return (
    <div onClick={clickHandler}>
      <CustomImage src={data.url} className="rounded-2xl" />
    </div>
  );
};

export default WidgetMedia;
