import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const PartnerContainerSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="flex gap-9 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <div
            className="w-[90px] h-[90px] min-w-[90px] min-h-[90px] rounded-full"
            style={{ backgroundColor: colors.Neutral_Surface }}
          />
          <div className="w-[120px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        </div>

        <div className="flex flex-col gap-5 justify-center items-center">
          <div
            className="w-[90px] h-[90px] min-w-[90px] min-h-[90px] rounded-full"
            style={{ backgroundColor: colors.Neutral_Surface }}
          />
          <div className="w-[120px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        </div>
      </div>

      <div className="w-64 h-[60px] rounded-md my-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[334px] h-[272px] rounded-md " style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[334px] h-[259px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[334px] h-[239px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default PartnerContainerSkeleton;
