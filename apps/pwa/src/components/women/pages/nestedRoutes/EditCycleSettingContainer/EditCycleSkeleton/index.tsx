import useTheme from '@hooks/useTheme';

const EditCycleSkeleton = () => {
  const { colors } = useTheme();

  return (
    <div className="flex relative z-0 flex-col items-center gap-6  justify-center">
      <div className="flex flex-col justify-center items-center w-3/4 gap-9  mt-10">
        <div className="flex flex-col items-center w-full justify-center gap-8">
          <div className="flex flex-col items-center w-full justify-center">
            <div className="flex flex-col items-center w-full justify-center gap-6 animate-skeleton">
              <div className="w-full h-[200px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[200px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCycleSkeleton;
