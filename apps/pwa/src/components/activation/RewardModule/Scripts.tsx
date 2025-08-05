import Typography from '@components/ui/Typography';

import { ScriptsProps } from './types';

const Scripts = ({ title, description, order, firstName }: ScriptsProps) => {
  const updateTitle = title.replace('@اسم', firstName || 'ایمپویی').replace('@', '');
  const updateDescription = description.replace('@اسم', firstName || 'ایمپویی').replace('@', '');

  return (
    <div
      className="flex flex-col items-center gap-1 pointer-events-none"
      style={{ order, padding: order <= 1 ? '40px 0' : '16px' }}
    >
      <div className="px-3 pt-3 pb-2">
        <Typography scale="Title" size="Small" textAlign="center">
          {updateTitle}
        </Typography>
      </div>

      <Typography scale="Body" size="Medium" textAlign="center" color="Surface_InverseSurface">
        {updateDescription}
      </Typography>
    </div>
  );
};

export default Scripts;
