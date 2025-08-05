import { Fragment } from 'react';

import Button from '@components/ui/Button';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import useTheme from '@hooks/useTheme';

import UserInfoModals from './UserInfoModals';
import UserInfoSkeleton from './UserInfoSkeleton';
import useModifiedData from './__hooks__/useModifiedData';
import useSubmit from './__hooks__/useSubmit';
import { USER_INFO_INPUT_GENERATOR_LIST } from './constants';
import UserInfoInputGenerator from './inputs/UserInfoInputGenerator';

const UserInfoContainer = () => {
  const { colors } = useTheme();
  const { values, isModified, changeValueHandler, loading } = useModifiedData();

  const isLastItem = USER_INFO_INPUT_GENERATOR_LIST.length - 1;

  const { isLoading, submitHandler } = useSubmit({
    name: values.name,
    birthDate: values.birthDate,
    cycleLength: values.cycleLength,
    sexualStatus: values.sexualStatus,
    periodLength: values.periodLength,
    calendarType: values.calendarType,
  });
  return (
    <>
      <WomenPageLayout rightElement="BackButton" rightElementScript="اطلاعات کاربری" backgroundColor={colors.Grey_50}>
        {loading && <UserInfoSkeleton />}

        {values && !loading && (
          <div className="flex relative z-0 flex-col items-center gap-6 pb-6 ">
            <div className="rounded-lg  mt-5 flex flex-col p-4 gap-4 w-[90%]" style={{ backgroundColor: colors.White }}>
              {USER_INFO_INPUT_GENERATOR_LIST.map((item, index) => {
                if (
                  (item.name === 'cycleLength' || item.name === 'periodLength') &&
                  (values.status === InstallationPurposeEnum.pregnancy.status ||
                    values.status === InstallationPurposeEnum.breastfeeding.status)
                ) {
                  return <Fragment key={index} />;
                }

                return (
                  <UserInfoInputGenerator
                    {...item}
                    key={index}
                    index={index}
                    isLastItem={isLastItem}
                    value={values[item.name]}
                    changeValueHandler={changeValueHandler}
                  />
                );
              })}
            </div>

            {/* {USER_INFO_RADIO_BTN_GENERATOR_LIST.map((item, index) => {
              return (
                <div
                  className="rounded-lg   flex flex-col p-4 gap-4 w-[90%]"
                  key={index}
                  style={{ backgroundColor: colors.White }}
                >
                  <UserInfoRadioBtnGenerator
                    {...item}
                    value={values[item.name]}
                    changeValueHandler={changeValueHandler}
                  />
                </div>
              );
            })} */}

            <div className="mt-auto">
              <div className="flex mx-auto w-[204px] min-w-fit">
                <Button
                  size="medium"
                  variant="fill"
                  color="primary"
                  fullWidth={true}
                  isLoading={isLoading}
                  onClick={submitHandler}
                  isDisable={!isModified || !values.name}
                >
                  ویرایش
                </Button>
              </div>
            </div>
          </div>
        )}
      </WomenPageLayout>

      {values && !loading && <UserInfoModals values={values} changeValueHandler={changeValueHandler} />}
    </>
  );
};

export default UserInfoContainer;
