import useTheme from '@hooks/useTheme';

const ActiveTicketSkeleton = () => {
  const { colors } = useTheme();

  const list = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col gap-3 animate-skeleton">
      {list.map((item) => (
        <div className="w-full h-32 rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} key={item} />
      ))}
    </div>
  );
};

export default ActiveTicketSkeleton;
