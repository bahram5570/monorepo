import { memo } from 'react';

import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useOperatingSystem from '@hooks/useOperatingSystem';
import useTheme from '@hooks/useTheme';

import PageIcons from './PageIcons';
import { FOOTER_HEIGTH, FOOTER_PAGES_LIST } from './constants';
import { ContainerProps } from './types';

const Container = ({ pathName }: ContainerProps) => {
  const { colors } = useTheme();
  const { operatingSystem } = useOperatingSystem();

  const height = operatingSystem === 'ios' ? FOOTER_HEIGTH + 16 : FOOTER_HEIGTH;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 mx-auto px-4 pt-2 grid grid-flow-col z-10"
      style={{ maxWidth: MAX_SCREEN_WIDTH, height, backgroundColor: colors.Neutral_Background }}
    >
      {FOOTER_PAGES_LIST.map((item, index) => (
        <PageIcons isSelected={item.url === pathName} title={item.title} Icon={item.Icon} url={item.url} key={index} />
      ))}
    </div>
  );
};

export default memo(Container, (prev, next) => {
  return prev.pathName === next.pathName;
});
