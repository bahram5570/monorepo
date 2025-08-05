import React from 'react';

import ArrowUpIcon from '@assets/icons/Alt Arrow Up.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ProgressBarPropsType } from './type';

const ProgressBar = ({ progress, avatar, partnerAvatar, className }: ProgressBarPropsType) => {
  const { colors } = useTheme();

  const milestones = [
    { percent: progress.goldPercent, text: progress.goldText, img: '/assets/images/gold.webp', isGold: true },
    { percent: progress.silverPercent, text: progress.silverText, img: '/assets/images/silver.webp', isGold: false },
    { percent: progress.bronzePercent, text: progress.bronzeText, img: '/assets/images/bronze.webp', isGold: false },
  ];

  return (
    <div className={`relative w-full p-4 ${className}`}>
      <div className="relative w-full h-4 rounded-xl" style={{ background: colors.Surface_SurfaceVariant }}>
        <div className="absolute  flex flex-col items-center right-0 z-30 -top-2">
          <div
            className="w-8 h-8  text-white text-[10px] flex items-center justify-center rounded-full"
            style={{ background: colors.Surface_OnSurfaceVariant }}
          >
            شروع
          </div>
        </div>
        <div
          className="absolute top-[20%] right-0 h-2  rounded-full"
          style={{
            width: `${progress.currentPercent === 100 ? progress.currentPercent : progress.currentPercent + 3}%`,
            background: colors.Surface_Outline,
          }}
        ></div>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="absolute -top-2 flex flex-col items-center gap-2"
            style={{
              right: `${milestone.isGold ? '' : `${milestone.percent}%`}`,
              left: `${milestone.isGold ? 0 : ''}%`,
            }}
          >
            <CustomImage
              src={milestone.img}
              width={32}
              height={32}
              className=" rounded-full"
              style={{
                border:
                  milestone.percent <= progress.currentPercent
                    ? `1px solid ${
                        milestone.percent === progress.bronzePercent
                          ? colors.Orange_500
                          : milestone.percent === progress.silverPercent
                            ? colors.Grey_500
                            : colors.Yellow_500
                      }`
                    : 'none',
              }}
            />

            {milestone.percent <= progress.currentPercent && (
              <Typography scale="Lable" size="Small" textAlign="center">
                {milestone.text}
              </Typography>
            )}
          </div>
        ))}

        <div
          className="absolute -top-8 flex flex-col items-center"
          style={{
            right: `${progress.currentPercent === 100 ? '' : `${progress.currentPercent}%`}`,
            left: `${progress.currentPercent !== 100 ? '' : 0}`,
          }}
        >
          <div className="flex items-center relative">
            <div className={`w-6 h-6 rounded-full border-2 border-white overflow-hidden ml-0 relative bg-white`}>
              <CustomImage
                src={partnerAvatar}
                className="w-full h-full !object-cover"
                style={{ border: `1px solid ${colors.Neutral_Background}` }}
              />
            </div>
            <div
              className={`w-6 h-6 rounded-full border-2 border-white overflow-hidden  ml-0 absolute left-4 bg-white`}
            >
              <CustomImage
                src={avatar}
                className="w-full h-full !object-cover"
                style={{ border: `1px solid ${colors.Neutral_Background}` }}
              />
            </div>
          </div>

          <ArrowUpIcon className="w-4 h-3" style={{ fill: colors.Surface_InverseSurface }} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
