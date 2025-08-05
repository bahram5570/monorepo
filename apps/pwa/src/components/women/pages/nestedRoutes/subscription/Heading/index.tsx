import Typography from '@components/ui/Typography';

import { HeadingProps } from './types';

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div className="relative flex flex-col items-center z-0">
      <Typography scale="Title" size="Large" textAlign="center">
        {title || ''}
      </Typography>

      <Typography scale="Body" size="Medium" textAlign="center">
        {description || ''}
      </Typography>
    </div>
  );
};

export default Heading;
