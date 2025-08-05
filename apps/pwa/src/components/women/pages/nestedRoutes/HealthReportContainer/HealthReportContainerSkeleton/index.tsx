import useTheme from '@hooks/useTheme';

const HealthReportContainerSkeleton = () => {
  const { colors } = useTheme();

  const style = { backgroundColor: colors.White };

  return (
    <div className="w-full animate-skeleton">
      <div className="w-[180px] h-[24px] rounded-lg ml-auto" style={style} />

      <div className="flex gap-4 py-4">
        <div className="w-full h-[170px] rounded-2xl" style={style} />
        <div className="w-full h-[170px] rounded-2xl" style={style} />
      </div>

      <div className="w-full h-[260px] rounded-2xl" style={style} />
    </div>
  );
};

export default HealthReportContainerSkeleton;
