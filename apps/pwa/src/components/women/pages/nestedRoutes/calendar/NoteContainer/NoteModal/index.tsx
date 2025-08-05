import CustomModal from '@components/ui/CustomModal';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import CalendarModal from './CalendarModal';
import DeleteNoteModal from './DeleteNoteModal';
import { NoteModalNameEnums } from './enum';
import { NoteModalPropsType } from './type';

const NoteModal = ({ noteValue, onChangeHandler }: NoteModalPropsType) => {
  const { getQueryParams } = useQueryParamsHandler();
  const router = useRouter();

  const modalName = getQueryParams('name') as NoteModalNameEnums | null;

  const onCloseModalHandler = () => {
    router.back();
  };

  return (
    <CustomModal isSlidingMode={modalName === NoteModalNameEnums.DateTime ? true : false}>
      {modalName === NoteModalNameEnums.DateTime && (
        <CalendarModal
          onChangeHandler={onChangeHandler}
          dateTime={noteValue.time}
          onCloseModalHandler={onCloseModalHandler}
        />
      )}

      {modalName === 'deleteNote' && <DeleteNoteModal />}
    </CustomModal>
  );
};

export default NoteModal;
