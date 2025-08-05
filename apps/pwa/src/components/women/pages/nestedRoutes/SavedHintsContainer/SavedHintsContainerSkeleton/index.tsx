import useTheme from '@hooks/useTheme';

const SavedHintsContainerSkeleton = () => {
  const { colors } = useTheme();

  const list = [1, 2];

  return (
    <div className="w-full flex flex-col gap-4 animate-skeleton">
      {list.map((item) => (
        <div className="w-full h-[160px] rounded-2xl p-4" style={{ backgroundColor: colors.White }} key={item} />
      ))}
    </div>
  );
};

export default SavedHintsContainerSkeleton;
