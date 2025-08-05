import useTheme from '@hooks/useTheme';

const RequestListSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="w-full h-full flex flex-col  gap-4 px-4 animate-skeleton">
      <div className="w-full flex justify-end items-center gap-2">
        <div className="w-[120px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
        <div
          className=" w-12 h-12  min-w-12 min-h-12 rounded-full"
          style={{ backgroundColor: colors.Neutral_Surface }}
        />
      </div>

      <div className="w-[200px] h-[20px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
    </div>
  );
};

export default RequestListSkeleton;
