'use client';

import useBreakPoint from '@hooks/useBreakPoint';
import { COLORS_LIST } from '@theme/colors';

import DepartmentIcon from '@assets/icons/careers/department.svg';
import LocationIcon from '@assets/icons/careers/location.svg';
import TimeIcon from '@assets/icons/careers/time.svg';
import WorkTypeIcon from '@assets/icons/careers/workType.svg';

import {
  CAREER_DEPARTMENT_TITLES,
  CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES,
  CAREER_EMPLOYMENT_TIME_TYPE_TITLES,
  CAREER_LOCATION_TITLES,
} from '../../constants';
import CardGenerator from './CardGenerator';
import CardsBigScreen from './CardsBigScreen';
import CardsSmallScreen from './CardsSmallScreen';
import { JobCardsTypes } from './types';

const JobCards = (props: JobCardsTypes) => {
  const { breakPoint } = useBreakPoint();

  const location = CAREER_LOCATION_TITLES[props.location];
  const departman = CAREER_DEPARTMENT_TITLES[props.departman];
  const employmentTimeType = CAREER_EMPLOYMENT_TIME_TYPE_TITLES[props.employmentTimeType];
  const employmentLocationType = CAREER_EMPLOYMENT_LOCATION_TYPE_TITLES[props.employmentLocationType];

  const list = [
    <CardGenerator title="لوکیشن" description={location} Icon={LocationIcon} />,
    <CardGenerator title="دپارتمان" description={departman} Icon={DepartmentIcon} />,
    <CardGenerator title="تایم کاری" description={employmentTimeType} Icon={TimeIcon} />,
    <CardGenerator title="نوع کار" description={employmentLocationType} Icon={WorkTypeIcon} />,
  ];

  return (
    <div className="w-full mb-6">
      <>{breakPoint.tablet ? <CardsSmallScreen list={list} /> : <CardsBigScreen list={list} />}</>
      <div className="w-full h-[1px] mt-6 hidden md:block" style={{ backgroundColor: COLORS_LIST.Neutral_Surface }} />
    </div>
  );
};

export default JobCards;
