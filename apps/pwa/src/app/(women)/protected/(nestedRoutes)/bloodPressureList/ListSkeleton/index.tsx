import useTheme from '@hooks/useTheme';

const ListSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center mt-11 gap-3 px-4 animate-skeleton">
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default ListSkeleton;
