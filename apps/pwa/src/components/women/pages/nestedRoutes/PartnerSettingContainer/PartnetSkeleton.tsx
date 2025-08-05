import useTheme from '@hooks/useTheme';

const PartnerSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div className="flex relative z-0 flex-col items-center gap-2  h-dvh justify-start mt-12">
      <div className="flex flex-col justify-center items-center w-3/4 gap-9">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-6 animate-skeleton">
              <div className="w-[96px] h-[96px] rounded-full" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-[300px] h-[150px] rounded-md" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[48px]" style={{ backgroundColor: colors.Neutral_Surface }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSkeleton;
