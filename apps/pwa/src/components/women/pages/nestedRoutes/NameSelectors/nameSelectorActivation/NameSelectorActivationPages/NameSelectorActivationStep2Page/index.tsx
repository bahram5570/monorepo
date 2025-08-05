'use client';

import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import Typography from '@components/ui/Typography';

import NameSelectorActivationCard from '../../NameSelectorActivationModules/NameSelectorActivationCard';
import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import NameSelectorActivationRadio from '../../NameSelectorActivationModules/NameSelectorActivationRadio';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const IMAGES_LIST = {
  [SelectNameGenderEnum.None]: '',
  [SelectNameGenderEnum.Girl]: '/assets/images/selectNameGirl.webp',
  [SelectNameGenderEnum.Boy]: '/assets/images/selectNameBoy.webp',
  [SelectNameGenderEnum.NotImportant]: '/assets/images/selectNameClothes.webp',
};

const NameSelectorActivationStep2Page = () => {
  const { data, payload, payloadHandler } = useNameSelectorActivationData();
  const { isNextStepLoading, nextStepNavigation } = useNameSelectorActivationSteps();

  if (!data) {
    return <></>;
  }

  return (
    <NameSelectorActivationMainModule>
      <NameSelectorActivationCard
        btnText={data.gender.btn}
        onClick={nextStepNavigation}
        isLoading={isNextStepLoading}
        isDisable={payload.gender === SelectNameGenderEnum.None}
      >
        <Typography scale="Title" size="Small" color="Surface_InverseSurface" className="mx-auto pb-8">
          {data.gender.title}
        </Typography>

        <div className="w-full flex flex-col gap-3">
          {data.gender.items.map((item, index) => (
            <NameSelectorActivationRadio
              key={index}
              title={item.title}
              subTitle={item.subtitle}
              image={IMAGES_LIST[item.value]}
              isSelected={payload.gender === item.value}
              onClick={() => payloadHandler({ name: 'gender', value: item.value })}
            />
          ))}
        </div>
      </NameSelectorActivationCard>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep2Page;
