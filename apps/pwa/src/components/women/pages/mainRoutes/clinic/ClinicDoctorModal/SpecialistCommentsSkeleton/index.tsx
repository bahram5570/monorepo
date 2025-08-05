import useTheme from '@hooks/useTheme';

const SpecialistCommentsSkeleton = () => {
  const { colors } = useTheme();

  const styles = { backgroundColor: colors.Neutral_Surface };
  const list = [1, 2, 3];

  return (
    <div className="w-full flex flex-col items-center gap-2 pt-5 p-4 animate-skeleton">
      <div className="w-[120px] h-[120px] rounded-full" style={styles} />
      <div className="w-[200px] h-[16px] rounded-md" style={styles} />
      <div className="w-[180px] h-[16px] rounded-md" style={styles} />
      <div className="w-[100px] h-[16px] rounded-md" style={styles} />

      <div className="w-[120px] h-[16px] rounded-md ml-auto mt-7" style={styles} />

      {list.map((i) => (
        <div className="w-full h-[120px] rounded-md" style={styles} key={i} />
      ))}
    </div>
  );
};

export default SpecialistCommentsSkeleton;
