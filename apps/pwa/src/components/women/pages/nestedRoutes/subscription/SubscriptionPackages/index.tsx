import Typography from '@components/ui/Typography';
import SubscriptionGenerator from '@components/women/SubscriptionGenerator';
import useTheme from '@hooks/useTheme';

import useUpdatedList from './__hooks__/useUpdatedList';
import { SubscriptionPackagesProps } from './types';

const SubscriptionPackages = ({
  selectedPackageIndexHandler,
  selectedPackageIndex,
  showAllHandler,
  packages,
  showAll,
  visibleCount,
}: SubscriptionPackagesProps) => {
  const { colors } = useTheme();
  const { updatedList } = useUpdatedList({ packages, showAll, visibleCount });

  return (
    <div className="w-full z-0">
      {updatedList.map((items, index) => (
        <SubscriptionGenerator
          onSelect={() => selectedPackageIndexHandler(index)}
          isSelected={selectedPackageIndex === index}
          key={index}
          {...items}
        />
      ))}

      {!showAll && (
        <div className="w-full flex items-center gap-2 p-4 " onClick={showAllHandler}>
          <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />

          <Typography scale="Lable" size="Medium" className="min-w-fit">
            مشاهده بیشتر پلن ها
          </Typography>

          <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />
        </div>
      )}
    </div>
  );
};

export default SubscriptionPackages;
