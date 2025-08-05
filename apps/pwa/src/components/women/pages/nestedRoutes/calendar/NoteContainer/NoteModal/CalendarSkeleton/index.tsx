import useTheme from '@hooks/useTheme';

const CalendarSkeleton = () => {
  const { colors } = useTheme();

  const backgroundStyle = { style: { backgroundColor: colors.Surface_OutlineVariant } };
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <div className="w-full px-4 animate-skeleton">
      <div
        className="w-full rounded-xl px-4 pb-4 pt-6  flex flex-col items-end"
        style={{ backgroundColor: colors.White }}
      >
        <div className="w-full h-[1px] block mt-2 mb-3" style={{ backgroundColor: colors.Neutral_Surface }} />

        <div className="w-full grid grid-cols-4 justify-between gap-4">
          {list.map((item) => (
            <div className="flex flex-col items-center gap-2" key={item}>
              <div className="w-7 h-7 rounded-md" style={{ ...backgroundStyle.style }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarSkeleton;
