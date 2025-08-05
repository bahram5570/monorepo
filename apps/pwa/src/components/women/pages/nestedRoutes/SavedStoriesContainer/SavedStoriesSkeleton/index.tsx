import useTheme from '@hooks/useTheme';

const SavedStoriesSkeleton = () => {
  const { colors } = useTheme();

  const list = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {list.map((item) => (
        <div className="flex flex-col items-center gap-3 animate-skeleton" key={item}>
          <div className="w-14 h-14 rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
          <div className="w-14 h-3 rounded" style={{ backgroundColor: colors.Neutral_Surface }} />
        </div>
      ))}
    </>
  );
};

export default SavedStoriesSkeleton;
