'use client';

import { useState } from 'react';

import ActivationBackBtn from '@components/activation/ActivationBackBtn';
import ActivationHeading from '@components/activation/ActivationHeading';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import Button from '@components/ui/Button';

import useSubmit from './__hooks__/useSubmit';

const WeightContainer = () => {
  const [currentWeight, setCurrentWeight] = useState<number>(20);
  const { isLoading, submitHandler } = useSubmit();

  const valueHandler = (v: string | number) => {
    setCurrentWeight(Number(v));
  };

  return (
    <div className="relative flex flex-col overflow-x-hidden min-h-[100dvh]">
      <ActivationBackBtn />

      <ActivationHeading
        scripts={{
          subtitle: '',
          title: 'در حال حاضر وزنت چقدره؟',
          description: 'برای اینکه بتونیم بهتر کمکت کنیم لازمه بدونیم:',
        }}
      />

      <WeightHeightModule type="weight" valueHandler={valueHandler} />

      <div className="flex mx-auto mt-auto pb-6 w-[204px] min-w-fit">
        <Button
          size="large"
          variant="fill"
          color="primary"
          isLoading={isLoading}
          navigationLoadingId="DatesContainer"
          onClick={() => submitHandler(currentWeight)}
        >
          ادامه
        </Button>
      </div>
    </div>
  );
};

export default WeightContainer;
