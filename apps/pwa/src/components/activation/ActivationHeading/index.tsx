import { useEffect, useState } from 'react';

import ImpoIcon from '@assets/images/questionsImpo.svg';

import Typography from '@components/ui/Typography';
import useIsLargeScreenHeight from '@hooks/__activation__/useIsLargeScreenHeight';
import useTheme from '@hooks/useTheme';
import { OrderOfQuestionScriptsTypes } from '@providers/__activation__/types';

import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_ICON_WIDTH,
  ACTIVATION_HEADING_SCRIPTS_ID,
  HEADING_HEIGHT,
} from './constants';
import { ActivationHeadingProps } from './types';
import usePercentage from './usePercentage';

const ActivationHeading = ({ scripts, progressPercentage, orderOfQuestionScripts }: ActivationHeadingProps) => {
  const { colors } = useTheme();
  const { isLargeScreen } = useIsLargeScreenHeight();
  const { maxWidth, progressBarSizes, rotate } = usePercentage({ progressPercentage });

  const hasProgressBar = progressPercentage !== undefined;
  const mainHeight = isLargeScreen ? HEADING_HEIGHT - 12 : HEADING_HEIGHT - ACTIVATION_HEADING_ICON_WIDTH;
  const scriptsOrder: OrderOfQuestionScriptsTypes = orderOfQuestionScripts || {
    title: 3,
    subtitle: 2,
    description: 1,
  };

  return (
    <>
      <div
        className="w-full flex justify-center pt-8 pointer-events-none z-10"
        style={{
          maxWidth,
          height: mainHeight,
          overflow: hasProgressBar ? 'hidden' : 'unset',
          position: progressPercentage === undefined ? 'relative' : 'absolute',
        }}
      >
        <div className="flex flex-col w-full mt-5">
          {isLargeScreen && (
            <ImpoIcon
              id={ACTIVATION_HEADING_ICON_ID}
              className="mx-auto duration-1000 z-10"
              style={{ height: ACTIVATION_HEADING_ICON_WIDTH, width: ACTIVATION_HEADING_ICON_WIDTH }}
            />
          )}

          <div
            id={ACTIVATION_HEADING_SCRIPTS_ID}
            className="w-full flex flex-col items-center gap-2 mt-4 px-4 duration-1000"
          >
            <Typography scale="Body" size="Medium" textAlign="center" style={{ order: scriptsOrder.description }}>
              {scripts.description}
            </Typography>

            <Typography scale="Title" size="Small" textAlign="center" style={{ order: scriptsOrder.title }}>
              {scripts.title}
            </Typography>

            <Typography scale="Body" size="Medium" textAlign="center" style={{ order: scriptsOrder.subtitle }}>
              {scripts.subtitle}
            </Typography>
          </div>
        </div>

        {!hasProgressBar && (
          <div className="absolute bottom-10 flex justify-center align-middle">
            <img
              alt="hollow"
              src="/assets/images/questionsHollow.png"
              className={`w-[100vw] max-w-[${maxWidth}] h-auto scale-[2.5] z-0`}
            />
          </div>
        )}

        {hasProgressBar && (
          <>
            <div
              className="absolute bottom-0 rounded-full border-4 flex align-bottom justify-center overflow-hidden"
              style={{
                borderColor: colors.Surface_SurfaceVariant,
                background: colors.Neutral_Background,
                ...progressBarSizes,
              }}
            >
              <div className="absolute bottom-10 flex justify-center align-middle">
                <img
                  alt="hollow"
                  src="/assets/images/questionsHollow.png"
                  className={`w-[100vw] max-w-[${maxWidth}] h-auto scale-[2.5] z-0`}
                />
              </div>
            </div>

            <div
              style={{
                rotate,
                borderColor: colors.Surface_SurfaceVariant,
                borderBottomColor: colors.PrimaryWoman_Primary,
                ...progressBarSizes,
              }}
              className="absolute bottom-0 rounded-full border-4"
            />
          </>
        )}
      </div>
    </>
  );
};

export default ActivationHeading;
