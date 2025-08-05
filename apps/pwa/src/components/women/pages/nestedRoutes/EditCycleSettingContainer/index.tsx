'use client';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import { FOOTER_HEIGTH } from '@components/women/WomenFooter/constants';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';

import EditCycleSkeleton from './EditCycleSkeleton';
import RadioButtonGenerator from './RadioButtonGenerator';
import useSubmit from './__hooks__/useSubmit';
import useValue from './__hooks__/useValue';
import { RADIO_ITEMS_LIST } from './constants';

const EditCycleContainer = () => {
  const { colors } = useTheme();
  const { handleChange, selectedValue, isModified, loading } = useValue();

  const { isLoading, submitHandler } = useSubmit(selectedValue);

  return (
    <>
      {loading && <EditCycleSkeleton />}
      {!loading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="انتخاب نحوه نمایش چرخه"
          backgroundColor={colors.Grey_50}
          paddingTop={0}
        >
          <div className="flex flex-col min-h-[100dvh] gap-6 pb-6" style={{ paddingTop: HEADER_HEIGHT }}>
            <div className="p-3 flex flex-col gap-3 " style={{ marginBottom: FOOTER_HEIGTH + 16 }}>
              <Typography scale="Body" size="Medium" className="w-full" textAlign="right">
                میتونی انتخاب کنی کدوم چرخه رو بهت نشون بدیم
              </Typography>
              <div className="flex gap-3 flex-col">
                {RADIO_ITEMS_LIST.map((item, index) => (
                  <RadioButtonGenerator
                    key={index}
                    {...item}
                    selectedValue={selectedValue}
                    handleChange={handleChange}
                  />
                ))}
              </div>
            </div>
            <footer
              className=" fixed bottom-0 w-full mx-auto py-3 z-40"
              style={{ backgroundColor: colors.White, maxWidth: MAX_SCREEN_WIDTH }}
            >
              <div className="flex flex-col justify-center items-center px-5">
                <Button
                  variant="fill"
                  size="medium"
                  color="primary"
                  onClick={submitHandler}
                  fullWidth={true}
                  className="w-4/5"
                  isDisable={!isModified}
                  isLoading={isLoading}
                >
                  ثبت تغییرات
                </Button>
              </div>
            </footer>
          </div>
        </WomenPageLayout>
      )}
    </>
  );
};

export default EditCycleContainer;
