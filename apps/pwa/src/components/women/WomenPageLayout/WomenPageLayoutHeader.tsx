'use client';

import Typography from '@components/ui/Typography';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import WidgetScaleModule from '../Widgets/WidgetScaleModule';
import { HEADER_HEIGHT, iconsList } from './constants';
import { HeaderProps } from './types';

const WomenPageLayoutHeader = (props: HeaderProps) => {
  const { colors } = useTheme();

  const backgroundColor =
    typeof props.headerBackgroundColor === 'undefined' ? colors.White : props.headerBackgroundColor;
  const LeftElement1 = props.leftElement1 ? iconsList[props.leftElement1] : () => <></>;
  const LeftElement2 = props.leftElement2 ? iconsList[props.leftElement2] : () => <></>;
  const RightElement = props.rightElement ? iconsList[props.rightElement] : () => <></>;

  const contents = (
    <div className="flex items-end w-full backdrop-blur-md" style={{ height: HEADER_HEIGHT, backgroundColor }}>
      <div className="flex px-4 py-2 w-full">
        <div className="w-fit min-w-fit flex gap-4">
          <LeftElement1 />
          <LeftElement2 />
        </div>

        <div className="w-full flex justify-center items-center">
          <Typography scale="Body" size="Large" color="Neutral_OnSurface">
            {props.middleScript || ''}
          </Typography>
        </div>

        <div className="flex items-center gap-4 min-w-fit">
          {props.rightElementScript && (
            <Typography scale="Body" size="Large">
              {props.rightElementScript || ''}
            </Typography>
          )}

          <RightElement />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`fixed left-0 right-0 top-0 mx-auto flex z-40`}
      style={{ maxWidth: MAX_SCREEN_WIDTH, height: HEADER_HEIGHT }}
    >
      {props.hasScalingAnimation ? <WidgetScaleModule>{contents}</WidgetScaleModule> : <>{contents}</>}
    </div>
  );
};

export default WomenPageLayoutHeader;
