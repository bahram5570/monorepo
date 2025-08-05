'use client';

import Typography from '@components/ui/Typography';

import NameSelectorActivationCard from '../../NameSelectorActivationModules/NameSelectorActivationCard';
import NameSelectorActivationFilters from '../../NameSelectorActivationModules/NameSelectorActivationFilters';
import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import NameSelectorActivationRadio from '../../NameSelectorActivationModules/NameSelectorActivationRadio';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';
import useSelectMain from './__hooks__/useSelectMain';
import useStylesLists from './__hooks__/useStylesLists';

const NameSelectorActivationStep3Page = () => {
  const { data, payload, payloadHandler } = useNameSelectorActivationData();
  const { isNextStepLoading, nextStepNavigation } = useNameSelectorActivationSteps();

  if (!data) {
    return <></>;
  }

  const { mainList, subList } = useStylesLists(data);
  const { mainValue, mainValueHandler } = useSelectMain();

  const selectMainHandler = (v: string) => {
    mainValueHandler(v);
    payloadHandler({ name: 'styles', value: [''] });
  };

  const selectSubHandler = (v: string) => {
    payloadHandler({ name: 'styles', value: [v] });
  };

  const selectedSubList = subList?.[mainValue] ? subList[mainValue] : null;
  const currentValue = payload.styles[0];

  return (
    <NameSelectorActivationMainModule>
      <NameSelectorActivationCard
        btnText={data.style.btn}
        onClick={nextStepNavigation}
        isLoading={isNextStepLoading}
        isDisable={currentValue === ''}
      >
        <Typography scale="Title" size="Small" color="Surface_InverseSurface" className="pb-4">
          {data.style.title}
        </Typography>

        <div className="w-full flex flex-col gap-3">
          {mainList.map((item, index) => (
            <NameSelectorActivationRadio
              key={index}
              title={item}
              isSelected={mainValue === item}
              onClick={() => selectMainHandler(item)}
            />
          ))}
        </div>

        {selectedSubList && (
          <>
            <Typography scale="Title" size="Small" color="Surface_InverseSurface" className="pb-4 pt-8">
              {data.style.filterTitle}
            </Typography>

            <NameSelectorActivationFilters
              key={mainValue}
              currentValue={currentValue}
              onSelect={selectSubHandler}
              items={selectedSubList.items}
            />
          </>
        )}
      </NameSelectorActivationCard>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep3Page;
