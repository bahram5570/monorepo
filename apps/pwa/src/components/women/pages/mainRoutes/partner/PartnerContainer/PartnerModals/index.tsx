import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import AcceptModal from './AcceptModal';
import RejectModal from './RejectModal';
import TypeRelationship from './TypeRelationship';
import UploadBackgroundImageModal from './UploadBackgroundImageModal';
import UploadImageModal from './UploadImageModal';
import { PartnerModalNameEnums } from './enums';

const PartnerModals = () => {
  const { getQueryParams } = useQueryParamsHandler();
  const route = useRouter();

  const modalName = getQueryParams('name') as PartnerModalNameEnums | null;

  const onCloseModal = () => {
    route.back();
  };

  return (
    <CustomModal
      isSlidingMode={
        modalName === PartnerModalNameEnums.UploadImage ||
        modalName === PartnerModalNameEnums.UploadBackgroundImage ||
        modalName === PartnerModalNameEnums.TypeDistance
      }
      className="!min-h-fit"
    >
      <div>
        {modalName === PartnerModalNameEnums.Accept && <AcceptModal />}
        {modalName === PartnerModalNameEnums.Reject && <RejectModal onCloseModal={onCloseModal} />}
        {modalName === PartnerModalNameEnums.UploadImage && <UploadImageModal />}
        {modalName === PartnerModalNameEnums.UploadBackgroundImage && <UploadBackgroundImageModal />}
        {modalName === PartnerModalNameEnums.TypeDistance && <TypeRelationship />}
      </div>
    </CustomModal>
  );
};

export default PartnerModals;
