import useTheme from '@hooks/useTheme';

const ClinicSkeleton = () => {
  const { colors } = useTheme();

  const list = [1, 2, 3, 4];

  return (
    <div className="w-full flex flex-col items-center gap-2 animate-skeleton">
      <div className="w-36 h-4 rounded" style={{ backgroundColor: colors.Surface_SurfaceVariant }} />

      {list.map((_, index) => (
        <div
          key={index}
          className="w-full h-[100px] rounded-xl"
          style={{ backgroundColor: colors.Surface_SurfaceVariant }}
        ></div>
      ))}
    </div>
  );
};

export default ClinicSkeleton;
