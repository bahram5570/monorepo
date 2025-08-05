import { useEffect, useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';
import useTheme from '@hooks/useTheme';

import CircleProgressBar from './CircleProgressBar';
import { ProgressCycleEnums } from './enums';
import { ProgressCycleLoadingProps } from './types';

const ProgressCycleLoading = ({
  backgroundColor,
  circleColor,
  onComplete,
  isSuccess,
  titles,
  image,
}: ProgressCycleLoadingProps) => {
  const { colors } = useTheme();
  const { isLargeScreen } = useIsLargeScreenHeight();
  const [loadingStatus, setLoadingStatus] = useState<ProgressCycleEnums>(ProgressCycleEnums.Start);

  useEffect(() => {
    if (isSuccess) {
      setLoadingStatus(ProgressCycleEnums.Complete);
    }
  }, [isSuccess]);

  return (
    <>
      {loadingStatus !== ProgressCycleEnums.Null && (
        <div
          className="w-full h-full flex flex-col justify-center items-center"
          style={{ backgroundColor: backgroundColor || colors.Neutral_Background }}
        >
          {isLargeScreen && (
            <div className="mb-16 w-[200px]">
              <CustomImage src={image} />
            </div>
          )}

          <Typography scale="Title" size="Small" textAlign="center" className="w-full px-7">
            {titles.main}
          </Typography>

          <CircleProgressBar loadingStatus={loadingStatus} circleColor={circleColor} onComplete={onComplete} />

          <Typography scale="Body" size="Medium">
            {titles.subTitle1}
          </Typography>

          <Typography scale="Body" size="Medium">
            {titles.subTitle2}
          </Typography>
        </div>
      )}
    </>
  );
};

export default ProgressCycleLoading;
