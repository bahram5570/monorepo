import { useState } from 'react';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import { LottieCanvas } from '@lib/LottieCanvas';

import DiscountCode from './DiscountCode';
import Heading from './Heading';
import SubmitBtn from './SubmitBtn';
import SubscriptionPackages from './SubscriptionPackages';
import SubscriptionSkeleton from './SubscriptionSkeleton';
import useGetData from './__hooks__/useGetData';
import useSelectedPackageIndex from './__hooks__/useSelectedPackage';
import useShowAll from './__hooks__/useShowAll';
import { SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT } from './constants';

const SubscriptionContainer = () => {
  const { showAll, showAllHandler } = useShowAll();
  const [approvedCode, setApprovedCode] = useState('');
  const { loadingPage, loadingResponse, callApi, data } = useGetData();
  const { selectedPackageIndex, selectedPackageIndexHandler } = useSelectedPackageIndex();

  return (
    <>
      {loadingPage && !data && <SubscriptionSkeleton />}

      {!loadingPage && data && (
        <WomenPageLayout
          leftElement1="Profile"
          paddingTop={HEADER_HEIGHT}
          rightElement={data?.hasSubscribtion ? 'BackButton' : undefined}
        >
          <div className="relative" style={{ paddingBottom: SUBSCRIPTION_SUBMIT_BUTTON_HEIGHT + 30 }}>
            <div className="flex flex-col items-center px-4 gap-5">
              <div className="min-h-56 w-full h-full">
                <LottieCanvas src={data?.medias[0]} autoplay={true} style={{ width: '100%', height: '100%' }} />
              </div>
              <Heading title={data.title} description={data.description} />

              <SubscriptionPackages
                showAll={showAll}
                packages={data.packages}
                visibleCount={data.visibleCount}
                showAllHandler={showAllHandler}
                selectedPackageIndex={selectedPackageIndex}
                selectedPackageIndexHandler={selectedPackageIndexHandler}
              />

              <DiscountCode
                onApply={callApi}
                loadingResponse={loadingResponse}
                discountCodeHelper={data.discountCodeHelper}
                isValidDiscountCode={data.isValidDiscountCode}
                approvedCodeHandler={(v) => setApprovedCode(v)}
              />

              <a href={`tel:${data.supportPhone}`}>
                <Typography scale="Body" size="Medium" textAlign="center">
                  {data.supportText}
                </Typography>
              </a>

              <CustomImage src={data.medias[1]} className="pb-10" />
              <CustomImage src={data.medias[2]} />
              <SubmitBtn
                approvedCode={approvedCode}
                packageId={data.packages[selectedPackageIndex].id}
                isFree={data.packages[selectedPackageIndex].isFree}
                value={data.packages[selectedPackageIndex].totalPay}
                payButtonText={data.packages[selectedPackageIndex].payButtonText}
              />
            </div>
          </div>
        </WomenPageLayout>
      )}
    </>
  );
};

export default SubscriptionContainer;
