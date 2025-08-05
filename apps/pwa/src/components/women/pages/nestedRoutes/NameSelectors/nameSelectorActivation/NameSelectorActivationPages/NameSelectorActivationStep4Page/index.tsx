'use client';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import NameSelectorActivationCard from '../../NameSelectorActivationModules/NameSelectorActivationCard';
import NameSelectorActivationMainModule from '../../NameSelectorActivationModules/NameSelectorActivationMainModule';
import useNameSelectorActivationData from '../../__hooks__/useNameSelectorActivationData';
import useNameSelectorActivationSteps from '../../__hooks__/useNameSelectorActivationSteps';

const NameSelectorActivationStep4Page = () => {
  const { typography, colors } = useTheme();
  const { data, payload, payloadHandler } = useNameSelectorActivationData();
  const { isNextStepLoading, nextStepNavigation } = useNameSelectorActivationSteps();

  const valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toString().trim().slice(0, 1);
    const persianLettersRegex = /^[\u0600-\u06FF\s]+$/;

    if (value === '' || persianLettersRegex.test(value)) {
      payloadHandler({ name: 'charFilter', value });
    }
  };

  if (!data) {
    return <></>;
  }

  const textColor = colors.Neutral_OnBackground;
  const font = typography.Body.Medium;

  return (
    <NameSelectorActivationMainModule>
      <NameSelectorActivationCard
        onClick={nextStepNavigation}
        btnText={data.charFilter.btn}
        isLoading={isNextStepLoading}
        isDisable={payload.charFilter === ''}
      >
        <Typography scale="Title" size="Small" color="Surface_InverseSurface" className="pb-4">
          {data.charFilter.title}
        </Typography>

        <input
          type="text"
          onChange={valueHandler}
          value={payload.charFilter}
          placeholder={data.charFilter.hint}
          style={{ ...font, backgroundColor: colors.White, color: textColor }}
          className="w-full border-none rounded-xl p-4 placeholder-[#7E7E7E]"
        />
      </NameSelectorActivationCard>
    </NameSelectorActivationMainModule>
  );
};

export default NameSelectorActivationStep4Page;
