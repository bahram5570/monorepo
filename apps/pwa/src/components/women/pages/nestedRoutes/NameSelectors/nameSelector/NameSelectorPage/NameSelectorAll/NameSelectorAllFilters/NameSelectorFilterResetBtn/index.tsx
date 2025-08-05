import CrossIcon from '@assets/icons/plus.svg';

import useTheme from '@hooks/useTheme';

import { NameSelectorFilterResetBtnProps } from './types';

const NameSelectorFilterResetBtn = ({ onClick }: NameSelectorFilterResetBtnProps) => {
  const { colors } = useTheme();

  const selectHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    onClick();
  };

  return (
    <div onClick={selectHandler} className="w-6 h-6 min-w-6 min-h-6 flex items-center justify-center">
      <CrossIcon className="w-5 h-auto rotate-45" style={{ stroke: colors.Neutral_OnBackground }} />
    </div>
  );
};

export default NameSelectorFilterResetBtn;
