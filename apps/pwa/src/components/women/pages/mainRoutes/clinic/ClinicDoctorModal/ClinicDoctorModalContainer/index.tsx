import WomenPageLayout from '@components/women/WomenPageLayout';
import { HEADER_HEIGHT } from '@components/women/WomenPageLayout/constants';
import useOverflowHandler from '@hooks/useOverflowHandler';

import DoctorInfo from '../DoctorInfo';
import NoComments from '../NoComments';
import SpecialistCommentsList from '../SpecialistCommentsList';
import SpecialistCommentsSkeleton from '../SpecialistCommentsSkeleton';
import useGetData from '../__hooks__/useGetData';
import { SpecialistCommentsProps } from '../types';

const ClinicDoctorModalContainer = ({ clinicInfo, drId }: SpecialistCommentsProps) => {
  useOverflowHandler();
  const { isLoading, doctorData, commentsData } = useGetData({ clinicInfo, drId });

  return (
    <WomenPageLayout rightElement="BackButton" rightElementScript="متخصص" paddingTop={0}>
      <div className="w-full h-[100dvh] overflow-y-auto pb-10" style={{ paddingTop: HEADER_HEIGHT }}>
        {isLoading && <SpecialistCommentsSkeleton />}

        {!isLoading && doctorData && commentsData && (
          <div style={{ paddingTop: 20 }} className="relative px-4 pb-5 z-0">
            <DoctorInfo
              image={doctorData.image}
              lastName={doctorData.lastName}
              firstName={doctorData.firstName}
              speciliaty={doctorData.speciliaty}
              nezamNumber={doctorData.nezamNumber}
            />

            {commentsData.length === 0 && <NoComments />}

            {commentsData.length > 0 && <SpecialistCommentsList commentsData={commentsData} />}
          </div>
        )}
      </div>
    </WomenPageLayout>
  );
};

export default ClinicDoctorModalContainer;
