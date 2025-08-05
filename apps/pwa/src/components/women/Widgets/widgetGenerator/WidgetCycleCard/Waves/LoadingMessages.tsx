import Typography from '@components/ui/Typography';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';

import { LoadingMessagesProps } from './types';

const LoadingMessages = ({ loadingStatus }: LoadingMessagesProps) => {
  return (
    <>
      <div className="animate-cycleUpdatingScript absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center pointer-events-none">
        <Typography
          scale="Title"
          size="Medium"
          className={`duration-300  ${loadingStatus === LoadingStatusEnum.loading ? 'scale-100' : 'scale-0'}`}
        >
          چرخه در حال بروزرسانی
        </Typography>
      </div>

      <div className="animate-cycleUpdatingScript absolute left-0 right-0 top-0 bottom-0 w-full h-full flex justify-center items-center pointer-events-none">
        <Typography
          scale="Title"
          size="Medium"
          className={`duration-300  ${loadingStatus === LoadingStatusEnum.loaded ? 'scale-100' : 'scale-0'}`}
        >
          چرخه بروزرسانی شد
        </Typography>
      </div>
    </>
  );
};

export default LoadingMessages;
