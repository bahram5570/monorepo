import CrownIcon from '@assets/icons/crown.svg';

import Typography from '@components/ui/Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useTheme from '@hooks/useTheme';
import Link from 'next/link';

import { SubscriptionProps } from '../__hooks__/userNameDetail/type';

const SubscriptionButton = ({ remaindDays }: SubscriptionProps) => {
  const { colors, typography } = useTheme();
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <div className=" px-4 py-2">
      <div
        className="flex flex-row justify-between items-center gap-1 lg:gap-8 p-4 rounded-lg"
        style={{ backgroundColor: colors.PrimaryWoman_Primary }}
      >
        <Link
          href="/protected/subscription"
          className="bg-white rounded-full  relative min-w-fit w-fit py-2 px-3"
          style={{ ...typography.Lable.Large, color: colors.PrimaryWoman_Primary }}
          onClick={() => pageNavigationHandler({ id: 'SubscriptionButton', showProgressBar: true })}
        >
          <Typography scale="Lable" size="Medium" color="PrimaryWoman_Primary">
            تمدید اشتراک
          </Typography>
        </Link>

        <div className="gap-1 lg:gap-2 flex flex-row items-center">
          <Typography scale="Lable" size="Medium" color="White">
            {`${remaindDays < 0 ? 0 : remaindDays} روز مانده تا پایان اشتراک`}
          </Typography>
          <CrownIcon className="w-8 h-8 mb-2" style={{ fill: colors.White }} />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionButton;
