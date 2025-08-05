import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const MemoryDetailSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[10px] rounded-lg" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[260px] rounded-lg" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default MemoryDetailSkeleton;
