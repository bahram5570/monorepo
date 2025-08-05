import Typography from '@components/ui/Typography';

import { ScriptsProps } from './types';

const Scripts = ({ title, inputsTitle, inputsTitleColor }: ScriptsProps) => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-8 z-0">
      <Typography scale="Body" size="Large" textAlign="center" color="FREE-STYLE" freeColor={inputsTitleColor}>
        {title}
      </Typography>

      <Typography scale="Lable" size="Large" textAlign="center">
        {inputsTitle}
      </Typography>
    </div>
  );
};

export default Scripts;
