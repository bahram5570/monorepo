import CustomImage from '@components/ui/CustomImage';

import { ICONS_WIDTH } from '../../constants';
import { UseSignIconProps } from './types';

const useSignIcon = ({ category, sign }: UseSignIconProps) => {
  const icon = (
    <CustomImage
      alt="sign"
      width={ICONS_WIDTH}
      height={ICONS_WIDTH}
      src={`/assets/images/signs/${category}/${sign}.svg`}
    />
  );

  return { icon };
};

export default useSignIcon;
