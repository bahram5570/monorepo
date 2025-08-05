import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const NoteContainerListSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-3 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT + 20 }}
    >
      <div className="w-full h-[80px] rounded-md " style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[80px] rounded-md " style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[80px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[80px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default NoteContainerListSkeleton;
