'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';
import useWidgetActions from '@hooks/useWidgetActions';
import { ActionTypes } from '@providers/WidgetActionsProvider/widgetCommon';
import { ActionTypeEnum, CyclePhaseEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import PregnancySettingsLinkGenerator from './PregnancySettingsLinkGenerator';
import { PREGNANCY_SETTINGS_LIST } from './constants';

const PregnancySettingsContainer = () => {
  const { colors } = useTheme();
  const { actionHandler } = useWidgetActions();
  const { getQueryParams } = useQueryParamsHandler();

  const pregnancyDate = getQueryParams('pregnancyDate') || '';
  const isDelivery = Number(getQueryParams('isDelivery') || -1);

  const selectHandler = (phaseType: CyclePhaseEnum) => {
    const action: ActionTypes = {
      actionType: ActionTypeEnum.InternalRout,
      api: '',
      internal: '',
      actionTypes: [],
      nextStep: { type: 0, isDismissible: false, delaySecond: 0, data: {} },
    };

    switch (phaseType) {
      case CyclePhaseEnum.EditPregnancyCycle:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.EditPregnancyCycle}&pregnancyDate=${pregnancyDate}&isDelivery=${isDelivery}`;
        break;
      case CyclePhaseEnum.Breastfeeding:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.Breastfeeding}`;
        break;
      case CyclePhaseEnum.PeriodTracker:
        action.internal = `/enterphase?phase=${CyclePhaseEnum.PeriodTracker}`;
        break;
    }

    actionHandler(action);
  };

  return (
    <WomenPageLayout
      rightElement="BackButton"
      rightElementScript="تنظیمات بارداری"
      backgroundColor={colors.Neutral_Surface}
    >
      <div className="flex flex-col items-center gap-2 px-4">
        {PREGNANCY_SETTINGS_LIST.map((item, index) => (
          <PregnancySettingsLinkGenerator
            key={index}
            title={item.title}
            phaseType={item.phaseType}
            selectHandler={selectHandler}
            description={item.description}
          />
        ))}
      </div>
    </WomenPageLayout>
  );
};

export default PregnancySettingsContainer;
