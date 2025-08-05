import useTheme from '@hooks/useTheme';

const EditActivationSkeleton = () => {
  const { colors } = useTheme();

  return (
    <>
      <div className="w-full h-32 rounded-xl animate-pulse" style={{ backgroundColor: colors.White }} />
      <div className="w-full h-32 rounded-xl animate-pulse" style={{ backgroundColor: colors.White }} />
    </>
  );
};

export default EditActivationSkeleton;
