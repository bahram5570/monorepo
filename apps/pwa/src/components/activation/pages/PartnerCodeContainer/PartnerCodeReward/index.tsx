import { colorFormatConverter } from '@utils/scripts';

import PartnerCodeRewardButtons from './PartnerCodeRewardButtons';
import PartnerCodeRewardHeadingImage from './PartnerCodeRewardHeadingImage';
import PartnerCodeRewardScripts from './PartnerCodeRewardScripts';
import { PartnerCodeRewardProps } from './types';

const PartnerCodeReward = ({ reward, firstName, onComplete }: PartnerCodeRewardProps) => {
  const color1 = colorFormatConverter(reward.gradient[1]);
  const color2 = colorFormatConverter(reward.gradient[0]);

  return (
    <div
      style={{ backgroundColor: color1 }}
      className="relative overflow-x-hidden min-h-[100dvh] animate-mainActivationModule flex flex-col gap-5"
    >
      <div className="flex flex-col items-center">
        <PartnerCodeRewardHeadingImage image={reward.image} backgroundColor={color2} doRepeat={reward.doRepeat} />
        <PartnerCodeRewardScripts title={reward.title} description={reward.description} firstName={firstName} />
      </div>

      <PartnerCodeRewardButtons onComplete={onComplete} btnLabel={reward.btnLabel} btnLabel2={reward.btnLabel2} />
    </div>
  );
};

export default PartnerCodeReward;
