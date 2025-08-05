'use client';

import { Fragment } from 'react';

import Button from '@components/ui/Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { ChildTypeEnum } from '@constants/activation.constants';
import useTheme from '@hooks/useTheme';

import BreastfeedingSettingInputGenerator from './BreastfeedingSettingInputGenerator';
import BreastfeedingSettingModal from './BreastfeedingSettingModal';
import useModifiedData from './__hooks__/useModifiedData';
import useSubmit from './__hooks__/useSubmit';
import { BREASTFEEDING_SETTING_INPUT_GENERATOR_LIST } from './constants';

const BreastfeedingSettingsContainer = () => {
  const { colors } = useTheme();
  const { changeValueHandler, checkIsModified, values, checkIsEmptyChildName } = useModifiedData();

  const { submitHandler, isLoading } = useSubmit(values);

  return (
    <WomenPageLayout
      rightElement="BackButton"
      backgroundColor={colors.Neutral_Surface}
      rightElementScript="ویرایش اطلاعات زایمان"
    >
      <div className="flex relative z-0 flex-col items-center gap-6 pb-6 ">
        <div className="flex flex-col items-center gap-2 px-4 w-full">
          {BREASTFEEDING_SETTING_INPUT_GENERATOR_LIST.map((item, index) => {
            if (item.name === 'childName' && values.childType === ChildTypeEnum.Twin) {
              return <Fragment key={index} />;
            }

            return (
              <BreastfeedingSettingInputGenerator
                {...item}
                key={index}
                value={values[item.name]}
                changeValueHandler={changeValueHandler}
              />
            );
          })}
        </div>

        <div className="flex flex-col justify-center items-center mt-auto">
          <Button
            size="medium"
            variant="fill"
            color="primary"
            fullWidth={false}
            className="w-2/4"
            isLoading={isLoading}
            onClick={submitHandler}
            isDisable={!checkIsModified() || checkIsEmptyChildName()}
          >
            ویرایش
          </Button>
        </div>
      </div>

      <BreastfeedingSettingModal changeValueHandler={changeValueHandler} value={values} />
    </WomenPageLayout>
  );
};

export default BreastfeedingSettingsContainer;
