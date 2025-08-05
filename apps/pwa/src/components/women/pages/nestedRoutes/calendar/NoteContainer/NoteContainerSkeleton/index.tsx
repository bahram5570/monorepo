import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const NoteContainerSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[120px] rounded-md my-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[150px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default NoteContainerSkeleton;
