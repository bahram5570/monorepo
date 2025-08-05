import NoImageIcon from '@assets/icons/noImage.svg';

import useTheme from '@hooks/useTheme';

const CustomImageError = () => {
  const { colors } = useTheme();

  return (
    <div
      className="flex justify-center items-center w-full aspect-square z-10"
      style={{ backgroundColor: colors.Surface_SurfaceVariant }}
    >
      <NoImageIcon className="w-3/5 max-w-[60px] h-fit" style={{ stroke: colors.Surface_OutlineVariant }} />
    </div>
  );
};

export default CustomImageError;
