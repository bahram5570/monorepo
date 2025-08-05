'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import { useEffect, useRef, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow1.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import {
  CAREER_DEPARTMENT_TITLES,
  CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES,
  CAREER_EMPLOYMENT_TIME_TYPE_TITLES,
  CAREER_LOCATION_TITLES,
} from '../../constants';
import { CardGeneratorTypes } from './types';

const CardGenerator = (props: CardGeneratorTypes) => {
  const { breakPoint } = useBreakPoint();
  const ref = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (breakPoint.tablet) {
      setIsHover(false);
      return;
    }

    const el = ref.current;

    if (el) {
      const handleMouseover = () => {
        setIsHover(true);
      };
      const handleMouseout = () => {
        setIsHover(false);
      };

      el.addEventListener('mouseover', handleMouseover);
      el.addEventListener('mouseout', handleMouseout);

      return () => {
        el.removeEventListener('mouseover', handleMouseover);
        el.removeEventListener('mouseout', handleMouseout);
      };
    }
  }, [breakPoint.tablet]);

  const employmentTimeScript = CAREER_EMPLOYMENT_TIME_TYPE_TITLES[props.employmentTimeType];
  const employmentLocationScript = CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES[props.employmentLocationType];
  const departmentScript = CAREER_DEPARTMENT_TITLES[props.departman];
  const locationScript = CAREER_LOCATION_TITLES[props.location];

  return (
    <CustomLink href={`/careers/${props.id}`}>
      <div
        ref={ref}
        className="w-full flex flex-col gap-2 p-4 rounded-xl border-[1px] duration-200"
        style={{
          borderColor: isHover ? COLORS_LIST.Primary_Primary : COLORS_LIST.Neutral_Surface,
          backgroundColor: isHover ? COLORS_LIST.Primary_PrimaryContainer : COLORS_LIST.Transparent,
        }}
      >
        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Title_Small" color={'Neutral_OnBackground'}>
            {props.title}
          </CustomTypography>

          <div
            className="w-fit py-[6px] px-[29px] rounded-full"
            style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
          >
            <CustomTypography fontSize="Body_Medium" color={'Neutral_OnBackground'}>
              {departmentScript}
            </CustomTypography>
          </div>
        </div>

        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Body_Small" color={'Neutral_OnBackground'}>
            {locationScript}
          </CustomTypography>
        </div>

        <div className="w-full flex justify-between items-center">
          <CustomTypography fontSize="Body_Small" color={'Neutral_OnBackground'}>
            {`${employmentTimeScript} - ${employmentLocationScript}`}
          </CustomTypography>

          <div
            className="w-8 h-8 flex items-center justify-center rounded-full"
            style={{ backgroundColor: isHover ? COLORS_LIST.Primary_Primary : COLORS_LIST.Primary_PrimaryContainer }}
          >
            <ArrowIcon
              className="w-3 h-auto"
              style={{ fill: isHover ? COLORS_LIST.White : COLORS_LIST.Primary_Primary }}
            />
          </div>
        </div>
      </div>
    </CustomLink>
  );
};

export default CardGenerator;
