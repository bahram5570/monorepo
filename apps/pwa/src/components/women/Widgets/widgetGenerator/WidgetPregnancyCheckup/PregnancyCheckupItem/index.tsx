import ArrowIcon from '@assets/icons/calendarArrow.svg';
import { colorFormatConverter, textShorter } from '@utils/scripts';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useWidgetActions from '@hooks/useWidgetActions';

import { PregnancyCheckupItemPropsTypes } from './type';

const PregnancyCheckupItem = ({
  action,
  backgroundColor,
  description,
  icon,
  title,
}: PregnancyCheckupItemPropsTypes) => {
  const { actionHandler } = useWidgetActions();
  const linkTo = () => {
    actionHandler(action);
  };
  return (
    <div
      style={{ background: `${colorFormatConverter(backgroundColor)}33` }}
      className=" rounded-lg flex flex-row-reverse gap-2 p-3"
      onClick={linkTo}
    >
      <div>
        <CustomImage src={icon} className="w-8 h-8" />
      </div>
      <div className="flex flex-col gap-1">
        <div
          className="flex w-full justify-between pb-3 border-b-[1px] "
          style={{ borderBottomColor: `${colorFormatConverter(backgroundColor)}66` }}
        >
          <ArrowIcon className="w-6 h-6" style={{ stroke: colorFormatConverter(backgroundColor) }} />
          <Typography scale="Body" size="Large">
            {title}
          </Typography>
        </div>
        <Typography scale="Body" size="Medium">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default PregnancyCheckupItem;
