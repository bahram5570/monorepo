import useTheme from '@hooks/useTheme';

const ShareExperienceSkeleton = () => {
  const { colors } = useTheme();

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="w-full px-4 animate-pulse" style={{ direction: 'rtl' }}>
      <div className="w-[160px] h-[20px] rounded-md mb-6" style={{ backgroundColor: colors.Neutral_Surface }} />

      <div className="w-full max-w-full overflow-hidden flex gap-4">
        {list.map((i) => (
          <div
            key={i}
            className="min-w-[130px] min-h-[140px] rounded-xl"
            style={{ backgroundColor: colors.Neutral_Surface }}
          />
        ))}
      </div>

      <div className="flex gap-4 pt-4 pb-8">
        <div className="w-[60px] h-[40px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-[120px] h-[40px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div className="w-[140px] h-[40px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
      </div>

      <div className="w-full flex flex-col gap-4">
        {list.map((i) => (
          <div className="w-full h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} key={i} />
        ))}
      </div>
    </div>
  );
};

export default ShareExperienceSkeleton;
