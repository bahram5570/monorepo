import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { RoutinItemHeadingProps } from './types';

const RoutinItemHeading = ({ title, description, icon }: RoutinItemHeadingProps) => {
  return (
    <div className="w-full flex items-center justify-between gap-5 pb-4">
      <CustomImage src={icon} width={88} height={88} />

      <div className="flex flex-col items-end gap-2">
        <Typography scale="Title" size="Small">
          {title}
        </Typography>

        <Typography scale="Body" size="Small">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default RoutinItemHeading;
