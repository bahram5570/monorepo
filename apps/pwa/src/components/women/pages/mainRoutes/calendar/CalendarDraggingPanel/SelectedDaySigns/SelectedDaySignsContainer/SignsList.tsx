import CustomSlider from '@components/ui/CustomSlider';
import useSignIcon from '@components/women/SignGenerator/__hooks__/useSignIcon';
import useTheme from '@hooks/useTheme';

import { SIGNS_LIST_SLIDER_ID } from './constants';
import { SignsListProps } from './types';

const SignsList = ({ signs }: SignsListProps) => {
  const { colors } = useTheme();

  return (
    <CustomSlider className="absolute top-0 left-0 right-10 bottom-0" sidePadding={32} id={SIGNS_LIST_SLIDER_ID}>
      {signs.map((item, index) => {
        const { icon } = useSignIcon(item);

        return (
          <div
            className="w-14 h-14 min-w-14 min-h-14 border-[1px] rounded-full overflow-hidden pointer-events-none"
            style={{ borderColor: colors.Neutral_Surface }}
            key={index}
          >
            {icon}
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default SignsList;
