import Typography from '@components/ui/Typography';

import { AccessNotificationScriptsProps } from './types';

const AccessNotificationScripts = ({ title, description, firstName }: AccessNotificationScriptsProps) => {
  const updateTitle = title.replace('@اسم', firstName || 'ایمپویی').replace('@', '');
  const updateDescription = description.replace('@اسم', firstName || 'ایمپویی').replace('@', '');

  return (
    <div className="flex flex-col items-center gap-1 p-4 pointer-events-none">
      <div className="px-3 pt-3 pb-2">
        <Typography scale="Headline" size="Small" textAlign="center">
          {updateTitle}
        </Typography>
      </div>

      <Typography scale="Body" size="Medium" textAlign="center" color="Surface_InverseSurface">
        {updateDescription}
      </Typography>
    </div>
  );
};

export default AccessNotificationScripts;
