import useTheme from '@hooks/useTheme';

const TicketContainerSkeleton = () => {
  const { colors } = useTheme();
  return (
    <div className="flex relative z-0 flex-col items-center gap-6 h-dvh  ">
      <div className="flex flex-col justify-center items-center w-full gap-9 mt-8">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-6 animate-skeleton w-full p-6">
              <div className="w-full h-[100px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[100px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[40px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[40px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[40px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
              <div className="w-full h-[40px] rounded-xl" style={{ backgroundColor: colors.Neutral_Surface }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketContainerSkeleton;
