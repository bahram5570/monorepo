import useTheme from '@hooks/useTheme';

const RatingSkeleton = () => {
  const { colors } = useTheme();

  const backgroundColor = colors.Neutral_Surface;

  return (
    <div className="w-full flex flex-col pt-6 animate-skeleton">
      <div className="w-full h-64 rounded-xl mt-[110px]" style={{ backgroundColor }} />
    </div>
  );
};

export default RatingSkeleton;
