'use client';

import AvatarContainer from './AvatarContainer';
import Biorhythm from './Biorhythem';
import Challenge from './Challenge';
import Memory from './Momery';
import PartnerCard from './PartnerCard';
import PartnerContainerSkeleton from './PartnerContainerSkeleton';
import PartnerLayout from './PartnerLayout';
import PartnerModals from './PartnerModals';
import ProfileButton from './ProfileButton';
import RequestSection from './RequestSection';
import useGetData from './__hooks__/useGetData';

const PartnerContainer = () => {
  const { data, isLoading } = useGetData();

  return (
    <>
      {isLoading && <PartnerContainerSkeleton />}
      {!isLoading && data && (
        <PartnerLayout isValid={data.valid} coverImage={data.coverImage}>
          <>
            <ProfileButton />

            <div className="flex flex-col items-center px-3 py-6 bg-white mx-4 rounded-[32px] relative">
              <AvatarContainer {...data} />

              <div className="flex justify-center items-center flex-col gap-9 relative">
                <div className="flex flex-col gap-4 xs:px-4">
                  <Challenge card={data.card} valid={data.valid} button={data.button} />
                  {!data.valid && <RequestSection />}

                  {data.partner.cycleCard.title || data.partner.cycleCard.image ? (
                    <PartnerCard partner={data.partner} valid={data.valid} />
                  ) : null}

                  {data.valid && <Biorhythm bioRhythemWidget={data.bioRhythemWidget} />}

                  <Memory memory={data.memory} valid={data.valid} />
                </div>
              </div>
            </div>
          </>

          <PartnerModals />
        </PartnerLayout>
      )}
    </>
  );
};

export default PartnerContainer;
