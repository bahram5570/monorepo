import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { DoctorInfoProps } from './types';

const DoctorInfo = ({ firstName, lastName, image, speciliaty, nezamNumber }: DoctorInfoProps) => {
  return (
    <div className="flex flex-col items-center">
      <CustomImage src={image} width={120} height={120} className="rounded-full" />

      <Typography scale="Headline" size="Small" className="pt-2">{`دکتر ${firstName} ${lastName}`}</Typography>

      <Typography scale="Body" size="Medium" color="Neutral_OnSurface">
        {speciliaty}
      </Typography>

      <Typography scale="Body" size="Medium" color="Neutral_OnSurface">
        {`نظام پزشکی ${nezamNumber}`}
      </Typography>
    </div>
  );
};

export default DoctorInfo;
