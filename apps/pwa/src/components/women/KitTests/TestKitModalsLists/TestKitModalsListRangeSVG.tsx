import useTheme from '@hooks/useTheme';

import { TestKitModalsListRangeSVGProps } from './types';

const TestKitModalsListRangeSVG = ({ result }: TestKitModalsListRangeSVGProps) => {
  const { colors } = useTheme();

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_12455_26898)">
        <rect width="56" height="56" rx="28" fill="white" />
        <g clipPath="url(#clip1_12455_26898)">
          <rect y="56" width="56" height="56" rx="28" transform="rotate(-90 0 56)" fill="#FFEEE2" />
          <g clipPath="url(#clip2_12455_26898)" filter="url(#filter0_d_12455_26898)">
            <rect
              width="23.4838"
              height="294.821"
              transform="matrix(-4.37114e-08 1 1 4.37114e-08 -195.098 16.2583)"
              fill="white"
            />
            <rect width="24" height="7" transform="matrix(-4.37114e-08 1 1 4.37114e-08 33 16)" fill="#DB2974" />
            <rect
              width="24"
              height="7"
              transform="matrix(-4.37114e-08 1 1 4.37114e-08 16 16)"
              fill={colors.Pink_500}
              opacity={result}
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_12455_26898"
          x="-211.098"
          y="4.2583"
          width="326.82"
          height="55.4839"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="8" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0 0.441667 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12455_26898" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12455_26898" result="shape" />
        </filter>
        <clipPath id="clip0_12455_26898">
          <rect width="56" height="56" rx="28" fill="white" />
        </clipPath>
        <clipPath id="clip1_12455_26898">
          <rect y="56" width="56" height="56" rx="28" transform="rotate(-90 0 56)" fill="white" />
        </clipPath>
        <clipPath id="clip2_12455_26898">
          <rect
            width="23.4838"
            height="294.821"
            fill="white"
            transform="matrix(-4.37114e-08 1 1 4.37114e-08 -195.098 16.2583)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default TestKitModalsListRangeSVG;
