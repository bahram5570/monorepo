import { useEffect, useRef } from 'react';

import { isDevelopeMode } from '@utils/system';

import Button from '@components/ui/Button';
import Typography from '@components/ui/Typography';
import VpnText from '@components/ui/VpnText';
import WomenPageLayoutHeader from '@components/women/WomenPageLayout/WomenPageLayoutHeader';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import useTheme from '@hooks/useTheme';
import { useRouter } from 'next/navigation';

import SpecialistInfoGenerator from '../SpecialistInfoGenerator';
import DiscountInput from './DiscountInput';
import InfoPayment from './InfoPayment';
import InfoSupport from './InfoSupport';
import useBuy from './__hooks__/useBuy';
import { SpecialistPaymantProps } from './types';

const SpecialistPaymant = (props: SpecialistPaymantProps) => {
  const router = useRouter();
  const { colors } = useTheme();
  const isFirstTime = useRef(isDevelopeMode());
  const { approvedCodeHandler, submitHandler, isLoading } = useBuy({
    questionValues: props.questionValues,
    type: props.type,
    id: props.id,
  });

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = false;
      return;
    }

    if (props.questionValues === null) {
      router.back();
    }
  }, [props.questionValues]);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 px-4 mx-auto w-full min-h-[100dvh] max-h-[100dvh] overflow-y-auto z-30"
        style={{ maxWidth: MAX_SCREEN_WIDTH, backgroundColor: colors.White }}
      >
        <div className="relative z-40">
          <WomenPageLayoutHeader rightElement="BackButton" rightElementScript="پرداخت" />
        </div>

        <div className="flex flex-col gap-8 min-h-[100dvh] pb-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
          <div className="flex flex-col items-end ">
            <Typography scale="Title" size="Small" className="pb-2">
              مشاوره آنلاین با پزشک
            </Typography>

            <SpecialistInfoGenerator
              image={props.image}
              isOnline={props.isOnline}
              lastName={props.lastName}
              firstName={props.firstName}
              speciliaty={props.speciliaty}
              nezamNumber={props.nezamNumber}
              backgroundColor={colors.Blue_50}
            />
          </div>

          <DiscountInput id={props.id} approvedCodeHandler={approvedCodeHandler} />

          <InfoPayment
            price={props.price}
            payPrice={props.payPrice}
            priceUnit={props.priceUnit}
            currentValue={props.currentValue}
            discountPrice={props.discountPrice}
          />

          <InfoSupport support={props.support} />
          <div className="mt-auto flex flex-col w-full gap-2 ">
            <VpnText />
            <Button size="medium" variant="fill" color="primary" isLoading={isLoading} onClick={submitHandler}>
              {props.submit}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialistPaymant;
