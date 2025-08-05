'use client';

import { useState } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useTheme from '@hooks/useTheme';

import RateModal from './RateModal';
import StarRate from './StarRate';
import { RateValuesType, ValuesHandlerTypes } from './type';

const RateContainer = () => {
  const { colors, typography } = useTheme();
  const [rateValues, setRateValues] = useState<RateValuesType>({ rate: 0, rateDescription: '' });
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const valuesHandler: ValuesHandlerTypes = (v) => {
    setRateValues({ ...rateValues, [v.name]: v.value });
  };

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="ثبت نظر" paddingTop={0}>
      <div className="flex flex-col items-end gap-3 min-h-[100dvh] p-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <div className="flex flex-col gap-10 w-full">
          <StarRate valuesHandler={valuesHandler} rate={rateValues.rate} />
          <div className="w-full p-3 rounded-xl " style={{ background: colors.Surface_SurfaceVariant }}>
            <div className="flex flex-col gap-4">
              <textarea
                rows={5}
                placeholder={
                  'لطفا نظرت رو در اینجا برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم'
                }
                value={toPersianNumbers(rateValues.rateDescription)}
                onChange={(e) => valuesHandler({ name: 'rateDescription', value: e.target.value })}
                className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none"
                style={{ background: colors.Surface_SurfaceVariant, ...typography.Body.Medium }}
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => {
            (newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' }),
              pageNavigationHandler({ showProgressBar: true, id: 'rateSupport' }));
          }}
          style={{
            background: colors.PrimaryWoman_Primary,
            cursor: `${rateValues.rate ? 'auto' : 'not-allowed'}`,
            opacity: `${rateValues.rate ? '1' : '0.5'}`,
          }}
          className="w-full flex justify-center items-center rounded-full py-3 px-6 mt-auto"
        >
          <Typography scale="Title" size="Small" color="PrimaryMan_OnPrimaryMan">
            ارسال نظر
          </Typography>
        </div>
      </div>
      <RateModal {...rateValues} />
    </WomenPageLayout>
  );
};

export default RateContainer;
