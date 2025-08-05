import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

const ChallengeSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center gap-4 px-4 animate-skeleton"
      style={{ paddingTop: HEADER_HEIGHT }}
    >
      <div className="w-full h-[55px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[55px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-2 rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="flex w-full flex-row-reverse gap-2">
        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-full h-[150px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      </div>
    </div>
  );
};

export default ChallengeSkeleton;
