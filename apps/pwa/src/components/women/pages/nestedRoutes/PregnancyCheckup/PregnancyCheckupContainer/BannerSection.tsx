import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { BannerSectionPropsType } from './type';

const BannerSection = ({ banner }: BannerSectionPropsType) => {
  const { colors } = useTheme();
  return (
    <div
      className="rounded-xl flex flex-row-reverse items-center pl-2 pt-2 mt-4"
      style={{ background: colors.Yellow_300 }}
    >
      <Typography scale="Body" size="Medium" color="Surface_InverseSurface" className="px-3 mb-2">
        {banner}
      </Typography>
      <CustomImage src="/assets/images/banner-checkupPregnancy.webp" />
    </div>
  );
};

export default BannerSection;
