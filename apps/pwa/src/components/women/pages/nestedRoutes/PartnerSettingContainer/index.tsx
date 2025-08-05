'use client';

import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useTheme from '@hooks/useTheme';

import AddPartner from './AddPartner';
import DeletePartner from './DeletePartner';
import DeletePartnerModal from './DeletePartnerModal';
import PartnerAvatar from './PartnerAvatar';
import PartnerSkeleton from './PartnetSkeleton';
import TypeRelationship from './TypeRelationship';
import useGetData from './__hooks__/useGetData';

const PartnerContainer = () => {
  const { colors } = useTheme();
  const { data, isLoading } = useGetData();

  return (
    <>
      {isLoading && <PartnerSkeleton />}
      {!isLoading && (
        <WomenPageLayout
          rightElement="BackButton"
          rightElementScript="هم‌دل من"
          backgroundColor={colors.White}
          paddingTop={0}
        >
          <div
            className="p-3 flex flex-col gap-4 min-h-screen"
            style={{ backgroundColor: colors.Grey_50, paddingTop: HEADER_HEIGHT + 16 }}
          >
            {}
            {data && data.valid ? (
              <div className="flex flex-col gap-4">
                <PartnerAvatar {...data} />
                <TypeRelationship distanceType={data.distanceType} />
                <DeletePartner />
              </div>
            ) : (
              <AddPartner />
            )}
          </div>
          <DeletePartnerModal />
        </WomenPageLayout>
      )}
    </>
  );
};

export default PartnerContainer;
