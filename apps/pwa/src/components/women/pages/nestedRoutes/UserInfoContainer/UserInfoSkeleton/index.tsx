import useTheme from '@hooks/useTheme';

const UserInfoSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-[100dvh] flex flex-col items-center gap-3 px-4 animate-skeleton">
      <div className="w-[120px] h-[20px] rounded-md ml-auto mt-4" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[120px] h-[20px] rounded-md ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[120px] h-[20px] rounded-md ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[120px] h-[20px] rounded-md ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[60px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-full h-[100px] rounded-md mt-5" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default UserInfoSkeleton;
