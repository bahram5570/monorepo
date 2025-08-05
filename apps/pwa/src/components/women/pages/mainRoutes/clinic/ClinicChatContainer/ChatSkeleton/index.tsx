import useTheme from '@hooks/useTheme';

const ChatSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="flex flex-col gap-5 px-4 animate-skeleton">
      <div className="w-[240px] h-[80px] rounded-xl ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[240px] h-[80px] rounded-xl ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[240px] h-[80px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
      <div className="w-[240px] h-[80px] rounded-xl ml-auto" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default ChatSkeleton;
