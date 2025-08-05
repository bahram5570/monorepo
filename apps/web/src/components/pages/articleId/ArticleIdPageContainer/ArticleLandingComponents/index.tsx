'use client';

import { Fragment } from 'react';

import OvulationCalculator from './OvulationCalculator';
import PeriodCalculator from './PeriodCalculator';
import PregnancyAgeCalculator from './PregnancyAgeCalculator';
import { ArticleLandingComponentsTypes, LandingComponentsTypes } from './types';

const ArticleLandingComponents = ({ body }: ArticleLandingComponentsTypes) => {
  const landingRegex = /\^\^\^(.*?)\^\^\^/g; // # ^^^name^^^
  const landingMatches = body.match(landingRegex);

  if (!landingMatches) {
    return <></>;
  }

  return (
    <>
      {landingMatches.map((item, index) => {
        const name = item.replaceAll('^^^', '').trim();
        const el = LANDING_COMPONENTS?.[name] || '';

        return <Fragment key={index}>{el}</Fragment>;
      })}
    </>
  );
};

export default ArticleLandingComponents;

export const LANDING_COMPONENTS: LandingComponentsTypes = {
  PregnancyAgeCalculator: <PregnancyAgeCalculator />,
  OvulationCalculator: <OvulationCalculator />,
  PeriodCalculator: <PeriodCalculator />,
};
