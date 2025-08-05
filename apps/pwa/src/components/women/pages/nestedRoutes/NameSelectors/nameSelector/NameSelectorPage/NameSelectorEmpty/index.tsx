import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { NameSelectorEmptyProps } from './types';

const NameSelectorEmpty = ({ image, txt1, txt2, children }: NameSelectorEmptyProps) => {
  return (
    <div className="w-full h-[300px] flex flex-col items-center justify-center">
      <CustomImage src={image} width={100} height={100} />

      <Typography scale="Body" size="Medium" textAlign="center" className="pt-3 pb-1">
        {txt1}
      </Typography>

      <Typography scale="Body" size="Medium" textAlign="center">
        {txt2}
      </Typography>

      {children && <>{children}</>}
    </div>
  );
};

export default NameSelectorEmpty;
