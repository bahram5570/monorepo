'use client';

import Button from '@components/ui/Button';
import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationStep1Page = () => {
  const { data } = useNameSelectorActivationData();
  const { nextStepNavigation, isNextStepLoading } = useNameSelectorActivationSteps();

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorActivationMainModule>
      <div className="relative w-full h-[304px] flex justify-center pointer-events-none">
        <CustomImage
          src={'/assets/images/selectNameHollow.webp'}
          className="w-[550px] h-[550px] min-w-[550px] min-h-[550px] -translate-y-[50px]"
        />
      </div>

      <div className="w-full flex flex-col items-center">
        <Typography scale="Title" size="Medium" color="Neutral_Background" textAlign="center">
          {data.weclome.title}
        </Typography>

        <Typography scale="Body" size="Large" color="Neutral_Background" textAlign="center" className="pt-2 pb-10">
          {data.weclome.description}
        </Typography>

        <Button
          size="large"
          variant="fill"
          color="onBackground"
          className="!w-[206px]"
          onClick={nextStepNavigation}
          isLoading={isNextStepLoading}
        >
          {data.weclome.btn}
        </Button>
      </div>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep1Page;
