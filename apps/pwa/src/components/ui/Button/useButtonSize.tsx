import useTheme from '@hooks/useTheme';

import { UseButtonSizeProps } from './types';

function useButtonSize({ size }: UseButtonSizeProps) {
  const { typography } = useTheme();

  const stylesTable = {
    small: {
      ...typography.Lable.Medium,
      height: '32px',
    },
    medium: {
      ...typography.Lable.Large,
      height: '40px',
    },
    large: {
      ...typography.Title.Small,
      height: '48px',
    },
  };

  const sizeStyles = stylesTable?.[size];
  return { sizeStyles };
}

export default useButtonSize;
