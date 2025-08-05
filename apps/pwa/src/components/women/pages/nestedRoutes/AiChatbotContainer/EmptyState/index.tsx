import Typography from '@components/ui/Typography';

import { EmptyStatePropsType } from './type';

const EmptyState = ({ emptyStateMessage, emptyStateTitle }: EmptyStatePropsType) => {
  return (
    <div className="w-full flex relative z-0 flex-col items-center gap-6  h-dvh justify-center">
      <div className="flex flex-col justify-center items-center gap-3 px-3">
        <Typography
          scale="Headline"
          size="Large"
          style={{ background: 'linear-gradient(273.74deg, #F24F7A 51.49%, #3B82F6 88.69%)', backgroundClip: 'text' }}
          color="Transparent"
        >
          {emptyStateTitle}
        </Typography>
        <Typography scale="Body" size="Large" color="Neutral_OnBackground" textAlign="center">
          {emptyStateMessage}
        </Typography>
      </div>
    </div>
  );
};

export default EmptyState;
